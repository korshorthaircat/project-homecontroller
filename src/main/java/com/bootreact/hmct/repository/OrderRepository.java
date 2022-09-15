package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.Order;

public interface OrderRepository extends JpaRepository<Order, String>{

	List<Order> findByUserUserId(String userId);

}
