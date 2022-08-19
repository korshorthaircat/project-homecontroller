package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.OrderItem;
import com.bootreact.hmct.entity.OrderItemId;

public interface OrderItemRepository extends JpaRepository<OrderItem, OrderItemId>{

}
