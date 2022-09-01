package com.bootreact.hmct.service.cart.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Cart;
import com.bootreact.hmct.repository.CartRepository;
import com.bootreact.hmct.service.cart.CartService;

@Service
public class CartServiceImpl implements CartService{
	@Autowired
	private CartRepository cartRepository;
	
	@Override
	public List<Cart> getCartList(String userId) {
		return cartRepository.findByUserUserId(userId);
	}
}
