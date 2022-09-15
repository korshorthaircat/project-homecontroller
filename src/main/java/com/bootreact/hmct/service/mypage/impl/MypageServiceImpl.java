package com.bootreact.hmct.service.mypage.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.mapper.OrderMapper;
import com.bootreact.hmct.repository.OrderRepository;
import com.bootreact.hmct.service.mypage.MypageService;

@Service
public class MypageServiceImpl implements MypageService{
	
    @Autowired
    OrderRepository orderRepository;
    
    @Autowired
    private OrderMapper orderMapper;

	@Override
	public List<Order> getMyOrderList() {
		return orderRepository.findAll();
	}

	
}
