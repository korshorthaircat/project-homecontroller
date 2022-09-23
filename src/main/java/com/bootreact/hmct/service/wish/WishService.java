package com.bootreact.hmct.service.wish;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.WishShowroom;

@Service
public interface WishService {
	
	//위시아이템 
			List<Map<String, Object>> getWishItemList(String userId);
			
			void addWishItem(String userId, int productNo);
			
			void deleteWishItem(String userId, int productNo);
			
			
			//위시쇼룸 
			List<Map<String, Object>> getWishShowroomList(String userId);
			
			void addWishShowroom(String userId, int showroomNo);
			
			void deleteWishShowroom(String userId, int showroomNo);
}
