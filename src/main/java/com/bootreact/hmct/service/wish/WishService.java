package com.bootreact.hmct.service.wish;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.WishItem;

@Service
public interface WishService {

	List<WishItem> getCartList(String userId);
	
	void addWish(String userId, int productNo);
	
	void deleteWish(String userId, int productNo);

}

 