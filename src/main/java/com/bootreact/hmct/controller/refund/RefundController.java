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
 					
 			//Cancel 테이블에 주문 정보 인서트(cancelRgsDate는 자동생성)
 			refundService.addCancel(
 					              cancelNo,
 								  Integer.parseInt(paramMap.get("orderNo").toString()),
 								  paramMap.get("cancelAmount").toString(), 
 								  cancelStatus, 
 								  paramMap.get("cancelReason").toString()); 
 			
// 			refundService.addRefund(
//			 					  paramMap.get("refundNo").toString(),
//								  paramMap.get("refundAmount").toString(),
//								  paramMap.get("refundBank").toString(),
//								  paramMap.get("refundAccount").toString(),
//								  paramMap.get("refundName").toString(),
//								  paramMap.get("cancelStatus").toString(), 
//								  paramMap.get("cancelReason").toString());				             
     	}catch(Exception e){
     		System.out.println(e.getMessage());
     	}
 	}
     
     //교환요청
     
     
     //반품 요청
}
