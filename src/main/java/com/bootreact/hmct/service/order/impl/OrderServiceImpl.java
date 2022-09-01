package com.bootreact.hmct.service.order.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.repository.OrderRepository;
import com.bootreact.hmct.service.order.OrderService;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    OrderRepository orderRepository;
    
    @Override
    public List<Order> getOrderList(){
    	return orderRepository.findAll();
    }
}
