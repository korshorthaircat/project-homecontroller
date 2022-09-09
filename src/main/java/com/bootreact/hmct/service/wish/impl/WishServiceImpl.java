package com.bootreact.hmct.service.wish.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.mapper.WishItemMapper;
import com.bootreact.hmct.mapper.WishShowroomMapper;
import com.bootreact.hmct.service.wish.WishService;

@Service
public class WishServiceImpl implements WishService{

	@Autowired
	WishItemMapper wishitemMapper;
	
	@Autowired
	WishShowroomMapper wishShowroomMapper;
	
	@Autowired
	

	@Override
	public void addWish(String userId, int productNo) {
		wishitemMapper.getWishItem(userId, productNo);
		
	}
	
	
	
}