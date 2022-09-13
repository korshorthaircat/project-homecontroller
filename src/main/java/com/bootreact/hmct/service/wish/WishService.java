package com.bootreact.hmct.service.wish;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishShowroom;

@Service
public interface WishService {
	
	//위시아이템 
			List<WishItem> getWishItemList(String userId);
			
			
			void addWishItem(String userId, String productNo);
			
			void deleteWishItem(String userId, String productNo);
			
			
			//위시쇼룸 
			List<WishShowroom> getWishShowroomList(String userId);
			
			void addWishShowroom(String userId, String showroomNo);
			
			void deleteWishShowroom(String userId, String showroomNo);
}
