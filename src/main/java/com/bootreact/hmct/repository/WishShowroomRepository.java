package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bootreact.hmct.entity.WishShowroom;
import com.bootreact.hmct.entity.WishShowroomId;

@Repository
public interface WishShowroomRepository extends JpaRepository<WishShowroom, WishShowroomId>{
	List<WishShowroom> findByUserUserId(String userId);
}
