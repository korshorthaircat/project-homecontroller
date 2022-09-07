package com.bootreact.hmct.dto;

import com.bootreact.hmct.entity.Delivery;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.entity.OrderItem;
import com.bootreact.hmct.entity.User;

import lombok.Data;

@Data
public class OrderDetailDTO {
    private User user;
    private Order order;
    private Delivery delivery;
    private OrderItem orderItem;
}
