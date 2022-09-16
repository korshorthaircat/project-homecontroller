package com.bootreact.hmct.controller.refund;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.service.order.OrderService;
import com.bootreact.hmct.service.refund.RefundService;

@RestController
@RequestMapping("/api/refund")
public class RefundController {
	 @Autowired
	 OrderService orderService;
	 
	 @Autowired
	 RefundService refundService;
	 
	 //반품요청
     @PostMapping("/createCancel")
     public Map<String, Object> createCancel(@RequestBody Map<String, Object> paramMap) {
    	 try {
     		System.out.println(paramMap.toString());
     		Map<String, Object> crCancel = new HashMap<String, Object>();
     		Map<String, Object> orderUpdate = orderService.updateOrder(paramMap);
     		Map<String, Object> addCancel = refundService.createCancel(paramMap);
     		
     		return crCancel;
     	}catch(Exception e){
     		Map<String, Object> errorMap = new HashMap<String, Object>();
     		errorMap.put("error", e.getMessage());
     		return errorMap;		
     	} 
     }
     
     //교환요청
     
     
     //취소요청
}
