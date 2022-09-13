package com.bootreact.hmct.service.wish.impl;
import java.util.List;
import java.lang.String;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.mapper.WishItemMapper;
import com.bootreact.hmct.mapper.WishShowroomMapper;
import com.bootreact.hmct.service.wish.WishService;

@Service
public class WishServiceImpl implements WishService{

	@Autowired
	WishItemMapper wishitemMapper;
	
	@Autowired
	WishShowroomMapper wishShowroomMapper;
	

	@Override
	public void addWish(String userId, int productNo) {
		wishitemMapper.getWishItem(userId, productNo);
		
	}

	@Override
	public List<WishItem> getCartList(String userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteWish(String userId, int productNo) {
		// TODO Auto-generated method stub
		
	}
	
	
	
}