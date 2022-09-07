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
}
