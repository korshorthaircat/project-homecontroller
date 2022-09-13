package com.bootreact.hmct.service.order;

import java.util.List;
import java.util.Map;

import com.bootreact.hmct.entity.Order;

public interface OrderService {
	
   int createOrderNo();
	
   List<Order> getOrderList();
   
   Map<String, Object> viewOrder(int orderNo);

   void addOrder(String userId, String orderAmount, String orderDiscount, String orderFee);
   
   void addOrderItem(List orderItemList);
   
   Map<String, Object> updateOrder(Map<String, Object> paramMap);

}
