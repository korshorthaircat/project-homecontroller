package com.bootreact.hmct.controller.order;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.OrderDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.service.order.OrderService;
import com.bootreact.hmct.service.user.UserService;

//주문, 주문취소, 반품, 교환, 환불 처리
@RestController
@RequestMapping("/api/order")
public class OrderController {
	
    @Autowired
	OrderService orderService;
    
    @Autowired
    UserService userService;
	
    //주문 목록 리스트
    @GetMapping("/getOrderList")
    public ResponseEntity<?> getOrderList(){
    	try {
    		List<Order> orderList = orderService.getOrderList();
    		
    		List<OrderDTO> orderDTOList = new ArrayList<OrderDTO>();
    		
    		//내가 가져오고싶은 정보들 
    		for(Order t: orderList) {
    			OrderDTO orderDTO = new OrderDTO();
    			
    			orderDTO.setOrderNo(t.getOrderNo());
//    			orderDTO.setUserId(t.getUserId());
    			orderDTO.setOrderStatus(t.getOrderStatus());
    			orderDTO.setOrderDate(t.getOrderDate());
    			orderDTO.setOrderMemo(t.getOrderMemo());
    			orderDTO.setOrderAmount(t.getOrderAmount());
    			orderDTO.setOrderDiscount(t.getOrderDiscount());
    			orderDTO.setOrderFee(t.getOrderFee());
    			
    			orderDTOList.add(orderDTO);	
    		}
    		ResponseDTO<OrderDTO> response = new ResponseDTO<>();
    		
    		response.setData(orderDTOList);
    		
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<OrderDTO> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
    }
    
//	//주문아이템 조회
//	ResponseEntity<?> getOrderItemList(Order order, String userId) {
//		return null;
//	}
//
//	//주문 생성
//	ResponseEntity<?> createOrder(Order order, String userId) {
//		orderService.createDelivery;
//		//쿠폰처리하여 할인액을 계산한 뒤, 
//		orderService.createOrder;
//		orderService.createOrderItem;
//		orderService.createPayment;
//		return null;
//	}
//
//	//주문취소 요청
//	ResponseEntity<?> cancelOrder(Order order, String userId) {
//		orderService.updateOrder(Order order); //orderStatus 필드의 값이 ‘주문취소'로 업데이트됨 
//		orderService.createCancel(Order order); //Cancel엔티티가 생겨야됨.
//		orderService.createRefund();
//		return null;
//	}
//
//	//반품 요청
//	ResponseEntity<?> createReturn() {
//		orderService.updateOrder(Order order); //orderStatus 필드의 값이 ‘주문취소'로 업데이트됨 
//		orderService.createRefund();
//		return null;
//	}
//
//	//교환 요청
//	ResponseEntity<?> createExchange() {
//		orderService.updateOrder(Order order); //orderStatus 필드의 값이 ‘주문취소'로 업데이트됨 
//		return null;
//	}

}
