package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.Cart;
import com.bootreact.hmct.entity.CartId;

public interface CartRepository extends JpaRepository<Cart, CartId>{
	List<Cart> findByUserUserId(String userId);
}
