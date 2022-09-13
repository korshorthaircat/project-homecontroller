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
    
    @Override
    public List<Order> getOrderList(){
    	return orderRepository.findAll();
    }
    
    @Override
    public Map<String, Object> viewOrder(int orderNo) {
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	resultMap.put("orderDetail", orderMapper.viewOrder(orderNo));
    	resultMap.put("orderItemList", orderMapper.getOrderItemList(orderNo));
    	
    	return resultMap;
    }

	@Override
	public int createOrderNo() {
		return 0;
	}
    
	@Override
	public void addOrder(String userId, String orderAmount, String orderDiscount, String orderFee) {
		orderMapper.addOrder(userId, orderAmount, orderDiscount, orderFee);
	}

	@Override
	public void addOrderItem(List orderItemList) {
		
		Map orderItem = new HashMap();
		
		for(int i = 0; i < orderItemList.size(); i++) {
			orderItem = (Map) orderItemList.get(i);
			
//			System.out.println(orderItem.get("productNo").toString() +  
//								 orderItem.get("productAmount").toString() +
//								 orderItem.get("productCount").toString() +  
//								 orderItem.get("commonCode").toString());
			
			orderMapper.addOrder(orderItem.get("productNo").toString(), 
								 orderItem.get("productAmount").toString(), 
								 orderItem.get("productCount").toString(), 
								 orderItem.get("commonCode").toString());
		}
		
	}
   
    
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
