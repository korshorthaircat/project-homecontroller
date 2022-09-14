package com.bootreact.hmct.service.order.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.mapper.OrderMapper;
import com.bootreact.hmct.repository.OrderRepository;
import com.bootreact.hmct.service.order.OrderService;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    OrderRepository orderRepository;
    
    @Autowired
    private OrderMapper orderMapper;
    
    //주문목록 조회
    @Override
    public List<Order> getOrderList(){
    	return orderRepository.findAll();
    }
    
    //주문 조회
    @Override
    public Map<String, Object> viewOrder(int orderNo) {
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	resultMap.put("orderDetail", orderMapper.viewOrder(orderNo));
    	resultMap.put("orderItemList", orderMapper.getOrderItemList(orderNo));
    	
    	return resultMap;
    } 

    //주문번호 생성
	@Override
	public int createOrderNo() {
		return orderMapper.createOrderNo();
	}
    
	//주문 추가
	@Override
	public void addOrder(int orderNo, String orderStatus, String userId, String orderAmount, String orderDiscount, String orderFee) {
		orderMapper.addOrder(orderNo, orderStatus, userId, orderAmount, orderDiscount, orderFee);
	}

	//주문아이템 추가
	@Override
	public void addOrderItem(int orderNo, List orderItemList) {
		Map orderItem = new HashMap();
		
		for(int i = 0; i < orderItemList.size(); i++) {
			orderItem = (Map) orderItemList.get(i);
			orderMapper.addOrderItem(orderNo,
									 orderItem.get("productNo").toString(), 
								 	 orderItem.get("productAmount").toString(), 
								 	 orderItem.get("productCount").toString(), 
								 	 orderItem.get("commonCode").toString());
		}	
	}
	 
	
	//배송정보 추가
	@Override
	public void addDelivery(int orderNo, String deliveryName, String deliveryTel, String deliveryZipcode, String deliveryAddress, String deliveryDetailAddress, String deliveryMessage) {
		orderMapper.addDelivery(orderNo, deliveryName, deliveryTel, deliveryZipcode, deliveryAddress, deliveryDetailAddress, deliveryMessage);
	}
	
	//결제정보 추가
	@Override
	public void addPayment(int orderNo, String paymentName, String paymentAmount, String paymentWay) {
		orderMapper.addPayment(orderNo, paymentName, paymentAmount, paymentWay);		
	}
	
   
	//주문 수정
    @Override
    public Map<String, Object> updateOrder(Map<String, Object> paramMap){
    	orderMapper.updateOrder(paramMap);
    	orderMapper.updatePayment(paramMap);
    	orderMapper.updateDelivery(paramMap);
    	
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	resultMap.put("orderDetail", orderMapper.viewOrder(Integer.parseInt(paramMap.get("orderNo").toString())));
    	resultMap.put("orderItemList", orderMapper.getOrderItemList(Integer.parseInt(paramMap.get("orderNo").toString())));
    	
    	return resultMap;
    	
    }

	



	

	

	

    
}
