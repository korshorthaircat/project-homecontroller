package com.bootreact.hmct.service.cart.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Cart;
import com.bootreact.hmct.mapper.CartMapper;
import com.bootreact.hmct.repository.CartRepository;
import com.bootreact.hmct.service.cart.CartService;

@Service
public class CartServiceImpl implements CartService{
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartMapper cartMapper;
	
	@Override
	public List<Cart> getCartList(String userId) {
		List<Cart> list = cartRepository.findByUserUserId(userId);
		System.out.println(list.size());
		return cartRepository.findByUserUserId(userId);
	}
	
	@Override
	public List<Map<String, Object>> getCartMapList(String userId) {
		return cartMapper.getCartList(userId);
	}
}
