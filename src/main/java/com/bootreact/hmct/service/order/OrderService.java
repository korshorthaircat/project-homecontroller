package com.bootreact.hmct.service.order;

import java.util.List;
import java.util.Map;

import com.bootreact.hmct.entity.Order;

public interface OrderService {
	
   //주문 목록 조회
   List<Order> getOrderList();
   
   //주문 조회
   Map<String, Object> viewOrder(int orderNo);

   //주문 생성
   int createOrderNo();
   void addOrder(int orderNo, String orderStatus, String userId, String orderAmount, String orderDiscount, String orderFee);
   void addOrderItem(int orderNo, List orderItemList);
   void addDelivery(int orderNo, String deliveryName, String deliveryTel, String deliveryZipcode, String deliveryAddress, String deliveryDetailAddress, String deliveryMessage);
   void addPayment(int orderNo, String paymentName, String paymentAmount, String paymentWay);
   
   //주문 수정
   Map<String, Object> updateOrder(Map<String, Object> paramMap);

}
