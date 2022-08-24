package com.bootreact.hmct.dto;

import java.util.Date;

import lombok.Data;

@Data
public class KakaoPayReadyVO {
	
	//response
	private String tid; //결제 한 건에 대한 고유번호, 결제 준비 API가 성공적으로 호출되면 발급, 20자리
	private String next_redirect_pc_url; //응답 바디로 받은 next_redirect_pc_url로 결제 대기 화면을 팝업(Popup) 혹은 레이어(Layer) 방식으로 띄움
	private Date created_at; //결제, 취소, 정기결제 API 호출에 대한 고유번호, 각 API 호출 성공 시 발급, 20자리

}
