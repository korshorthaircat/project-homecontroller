package com.bootreact.hmct.controller.order;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.OrderDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Delivery;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.entity.Payment;
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
	
    //주문 목록 조회
    @GetMapping("/getOrderList")
    public ResponseEntity<?> getOrderList(){
    	try {
    		List<Order> orderList = orderService.getOrderList();
    	
    		List<OrderDTO> orderDTOList = new ArrayList<OrderDTO>();
    		
    		//내가 가져오고싶은 정보들 
    		for(Order t: orderList) {
    			OrderDTO orderDTO = new OrderDTO();
    			
    			orderDTO.setOrderNo(t.getOrderNo());
    			orderDTO.setUser(t.getUser());  
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
    
    //주문 조회
    @GetMapping("/viewOrder")
    public Map<String, Object> viewOrder(Order order){
    	try {
    		
    		Map<String, Object> orderDetail = orderService.viewOrder(order.getOrderNo());
    		
    		return orderDetail;
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
    		errorMap.put("error", e.getMessage());
    		return errorMap;
    	}
    }
    
    //주문 수정(상태 업데이트)
    @PutMapping
    public Map<String, Object> updateOrder(Order order, Payment payment, Delivery delivery){
    	try {
    		Map<String, Object> orderUpdate = orderService.updateOrder(order.getOrderNo());
    		
    		return orderUpdate;
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
    		errorMap.put("error", e.getMessage());
    		return errorMap;		
    	}
    }

	//주문 생성
	@PostMapping("/createOrder")
	public void createOrder(@RequestBody Map<String, Object> paramMap) {
		try {

			//매개변수 잘 들어오는지 확인하기
			//System.out.println(paramMap.get("userId"));
			//System.out.println(paramMap.toString());

			//주문번호 생성하기
			int orderNo = orderService.createOrderNo();
			
			//Order 테이블에 주문 정보 인서트(orderDate는 자동생성)
			orderService.addOrder(orderNo,
								  paramMap.get("userId").toString(),
								  paramMap.get("orderAmount").toString(), 
								  paramMap.get("orderDiscount").toString(),
								  paramMap.get("orderFee").toString());
			
			//OrderItem 테이블에 주문아이템 정보 인서트
			List<Map<String, Object>> orderItemList = (List<Map<String, Object>>) paramMap.get("orderItemInfo");
			orderService.addOrderItem(orderNo,
									  orderItemList);
			
			//Dlvy 테이블에 배송정보 인서트(deliveryNo는 자동 생성)
			orderService.addDelivery(orderNo,
									 paramMap.get("deliveryName").toString(),
									 paramMap.get("deliveryTel").toString(),
									 paramMap.get("deliveryZipcode").toString(),
									 paramMap.get("deliveryAddress").toString(),
									 paramMap.get("deliveryDetailAddress").toString(),
									 paramMap.get("deliveryMessage").toString());
			
			//Pmt 테이블에 결제정보 인서트(paymentNo는 자동 생성)
			orderService.addPayment(orderNo,
									paramMap.get("userId").toString(),
									paramMap.get("paymentAmount").toString(),
									paramMap.get("paymentWay").toString());
		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    	}
	}


}
