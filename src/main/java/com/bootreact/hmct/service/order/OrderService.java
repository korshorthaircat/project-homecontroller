package com.bootreact.hmct.service.order;

import java.util.List;
import java.util.Map;

import com.bootreact.hmct.entity.Order;

public interface OrderService {
   List<Order> getOrderList();
   
   Map<String, Object> viewOrder(int orderNo);
   
   Map<String, Object> updateOrder(int orderNo);
}
