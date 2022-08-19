package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.Order;

public interface OrderRepository extends JpaRepository<Order, String>{

}
