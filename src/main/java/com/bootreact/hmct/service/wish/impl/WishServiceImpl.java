package com.bootreact.hmct.service.wish.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishShowroom;
import com.bootreact.hmct.mapper.WishItemMapper;
import com.bootreact.hmct.mapper.WishShowroomMapper;
import com.bootreact.hmct.repository.WishItemRepository;
import com.bootreact.hmct.repository.WishShowroomRepository;
import com.bootreact.hmct.service.wish.WishService;

@Service
public class WishServiceImpl implements WishService{
	
	@Autowired
	private WishItemRepository wishItemRepository;
	
	@Autowired
	private WishItemMapper wishItemMapper;
	
	@Autowired
	private WishShowroomRepository wishShowroomRepository;
	
	@Autowired
	private WishShowroomMapper wishShowroomMapper;
	
	
	
	
	
		//get위시아이템 
		@Override
		public List<Map<String, Object>> getWishItemList(String userId) {
			List<Map<String, Object>> list = wishItemMapper.getWishItemList(userId);
			System.out.println(list.size());
			return list;
		}
	
		//add위시아이템 
		@Override
		public void addWishItem(String userId, int productNo) {
			wishItemMapper.addWishItem(userId, productNo);		
		}
		
		//delete위시아이템
		@Override
		public void deleteWishItem(String userId, String productNo) {
			wishItemMapper.deleteWishItem(userId, Integer.parseInt(productNo));	
		}
	
		
		
		
		
		
		
		
		
		//get위시쇼룸 
		@Override
		public List<WishShowroom> getWishShowroomList(String userId) {
		List<WishShowroom> list = wishShowroomRepository.findByUserUserId(userId);
		System.out.println(list.size());
		return wishShowroomRepository.findByUserUserId(userId);
		}
	
		//add위시쇼룸  
		@Override
		public void addWishShowroom(String userId, String showroomNo) {
			wishShowroomMapper.addWishShowroom(userId, Integer.parseInt(showroomNo));		
		}
		
		//delete위시쇼룸 
		@Override
		public void deleteWishShowroom(String userId, String showroomNo) {
			wishShowroomMapper.deleteWishShowroom(userId, Integer.parseInt(showroomNo));	
		}
	
}
