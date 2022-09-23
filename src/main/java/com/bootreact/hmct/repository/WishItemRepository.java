package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishItemId;

@Repository
public interface WishItemRepository extends JpaRepository<WishItem, WishItemId>{
	List<WishItem> findByUserUserId(String userId);
}
