package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishItemId;

@Repository
public interface WishItemRepository extends JpaRepository<WishItem, WishItemId>{
	//public static final WishItem wishItem = new WishItem();
	
	//void save(String userId, int productId);      
	
}
