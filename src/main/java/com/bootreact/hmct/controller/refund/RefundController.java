package com.bootreact.hmct.controller.refund;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.service.order.OrderService;
import com.bootreact.hmct.service.refund.RefundService;

@RestController
@RequestMapping("/api/refund")
public class RefundController {
	 @Autowired
	 OrderService orderService;
	 
	 @Autowired
	 RefundService refundService;
	 
	 //취소 요청
     @PostMapping("/createCancel")
     public void createCancel(@RequestBody Map<String, Object> paramMap) {
 		try {
 			//매개변수 잘 들어오는지 확인하기
 			//System.out.println(paramMap.get("orderNo"));
 			//번호 생성(취소,환불)
 			int cancelNo = refundService.createCancelNo();
 			int refundNo = refundService.createRefundNo();
 					
 			//주문상태			 
 			String cancelStatus = "취소 대기";
 			String refundStatus = "환불 대기";
 			String orderStatus = "취소 대기";		
 			//Cancel 테이블에 주문 정보 인서트(cancelRgsDate는 자동생성)
 			refundService.addCancel(
 					              cancelNo,
 								  Integer.parseInt(paramMap.get("orderNo").toString()),
 								  paramMap.get("cancelAmount").toString(), 
 								  cancelStatus, 
 								  paramMap.get("cancelReason").toString()); 
 			
 			refundService.addRefund(
			 					  refundNo,
								  cancelNo,
								  refundStatus,
								  paramMap.get("refundAmount").toString(),
								  paramMap.get("refundBank").toString(),
								  paramMap.get("refundAccount").toString(),
								  paramMap.get("refundName").toString());
 			
 			orderService.updateStaus( Integer.parseInt(paramMap.get("orderNo").toString()), 
 					                  orderStatus);
 			
     	}catch(Exception e){
     		System.out.println(e.getMessage());
     	}
 	};
     
     //반품 요청
 	 @PostMapping("/createRetun")
     public void createRetun(@RequestBody Map<String, Object> paramMap) {
 		try {
 			//매개변수 잘 들어오는지 확인하기
 			//System.out.println(paramMap.get("orderNo"));
 			
 			//번호 생성(취소,환불)
 			int retunNo = refundService.createRetunNo();
 			int refundNo = refundService.createRefundNo();
 					
 			//주문상태			 
 			String retunState = "반품 대기";
 			String refundStatus = "환불 대기";
 			String orderStatus = "반품 대기";		
 			//Cancel 테이블에 주문 정보 인서트(cancelRgsDate는 자동생성)
 			
 			refundService.addRetun(
 								  retunNo,
 								  Integer.parseInt(paramMap.get("orderNo").toString()),
 								  paramMap.get("retunAmount").toString(), 
 								  retunState, 
 								  paramMap.get("retunReason").toString()); 
 			
 			refundService.addRefundsc(
			 					  refundNo,
			 					  retunNo,
								  refundStatus,
								  paramMap.get("refundAmount2").toString(),
								  paramMap.get("refundBank2").toString(),
								  paramMap.get("refundAccount2").toString(),
								  paramMap.get("refundName2").toString());
 			
 			orderService.updateStaus( Integer.parseInt(paramMap.get("orderNo").toString()), 
 					                  orderStatus);
 			
     	}catch(Exception e){
     		System.out.println(e.getMessage());
     	}
 	}; 
     
    //교환 요청
 	@PostMapping("/createExchange")
    public void createExchange(@RequestBody Map<String, Object> paramMap) {
		try {
			//매개변수 잘 들어오는지 확인하기
			System.out.println(paramMap.get("orderNo"));
			
			//번호 생성(취소,환불)
			int exchangeNo = refundService.createExchangeNo();
					
			//주문상태			 
			String exchangeStatus = "교환 대기";
			String orderStatus = "교환 대기";		
			//Cancel 테이블에 주문 정보 인서트(cancelRgsDate는 자동생성)
			
			refundService.addExchange(
								  exchangeNo,
								  Integer.parseInt(paramMap.get("orderNo").toString()),
								  exchangeStatus, 
								  paramMap.get("exchangeReason").toString()); 
					
			orderService.updateStaus( Integer.parseInt(paramMap.get("orderNo").toString()), 
					                  orderStatus);
			
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    	}
	}; 
}
