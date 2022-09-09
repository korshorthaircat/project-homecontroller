package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishShowroom;
import com.bootreact.hmct.entity.WishShowroomId;

public interface WishShowroomRepository extends JpaRepository<WishShowroom, WishShowroomId>{
	List<WishShowroom> findByUserUserId(String userId);
}
