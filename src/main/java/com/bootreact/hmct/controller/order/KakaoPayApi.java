package com.bootreact.hmct.controller.order;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.bootreact.hmct.dto.KakaoPayApprovalVO;
import com.bootreact.hmct.dto.KakaoPayReadyVO;

@RestController
@RequestMapping("/api/order")
public class KakaoPayApi {
	//카카오페이 연동은 리퀘스트를 두 번 보내서, 결제요청과 결제승인후 결제내역정보를 받아와야 한다...
	//1. 결제준비 //2. 결제요청 //3.결제승인
	
	private static final String HOST = "https://kapi.kakao.com";
	
	private KakaoPayReadyVO kakaoPayReadyVO; 
	private KakaoPayApprovalVO kakaoPayApprovalVO;
	
	@PostMapping("/kakaopay")
	public void kakaoPayReady() {
		
		RestTemplate restTemplate = new RestTemplate(); //스프링에서 제공하는 http 통신에 유용하게 쓸 수 있는 템플릿
	
		//서버로 요청할 Header
		HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "ad3cffd957a8fbe95dfcde71f91574af"); //카카오 developers에 등록한 admin키
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8"); //"application/x-www-form-urlencoded;charset=utf-8" 
        
        // 서버로 요청할 Body - 요청에 넘겨줄 매개변수들
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME"); //제휴를 통해 발급받을 수 있는 가맹점 코드. (현재 테스트코드)
        params.add("partner_order_id", "1001"); //결제건에 대한 가맹점의 주문번호. TID와 연결시켜두고 대사작업을 할 때 사용.
        params.add("partner_user_id", "gogo"); //가맹점에서 사용자를 구분할 수 있는 id
        params.add("item_name", "책상");
        params.add("quantity", "1");
        params.add("total_amount", "2100");
        params.add("tax_free_amount", "0");
        params.add("approval_url", "http://localhost:3000/"); //요청 성공시 리다이렉트될 url
        params.add("cancel_url", "http://localhost:3000/"); //요청 취소시 리다이렉트될 url 
        params.add("fail_url", "http://localhost:3000/"); //요청 유효시간(15분) 경과시 리다이렉트될 url
	
        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
        
        try {
            kakaoPayReadyVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/ready"), body, KakaoPayReadyVO.class);
            
            System.out.println(kakaoPayReadyVO.getTid());
            System.out.println(kakaoPayReadyVO.getNext_redirect_pc_url());
            
            //응답 바디로 받은 next_redirect_pc_url 값으로
            //결제 대기 화면을 팝업(Popup) 혹은 레이어(Layer) 방식으로 띄워야 함.
 
        } catch (RestClientException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }  
	}
	
	//결제요청 성공 후 결제승인 요청하는 메서드
	//pg_token은 사용자가 결제 수단을 선택하고 결제 버튼을 눌러 approval_url로 리다이렉트될 때, 리다이렉트 요청의 approval_url에 포함된 query string으로 전달 받
	public KakaoPayApprovalVO kakaoPayInfo(String pg_token) {
		         
        RestTemplate restTemplate = new RestTemplate();
 
        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "ad3cffd957a8fbe95dfcde71f91574af");
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
 
        // 서버로 요청할 Body - 요청에 넘겨줄 매개변수들
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", kakaoPayReadyVO.getTid());
        params.add("partner_order_id", "1001");
        params.add("partner_user_id", "gogo");
        params.add("total_amount", "2100");
        params.add("pg_token", pg_token);
        
        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
        
        try {
            kakaoPayApprovalVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, KakaoPayApprovalVO.class);
          
            return kakaoPayApprovalVO;
        
        } catch (RestClientException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return null;
    }
}
