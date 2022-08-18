package com.bootreact.hmct.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_ORDRITEM")
@Data
public class OrderItem {
    
	//주문 번호
	@JoinColumn(name="orderNo")
	private Order order;
	
	//제품 번호
	private String productNo;			 
	
	//주문 품목 번호
	@Id
    private String orderItemId;

	
	//제품 아이디
	private String productId;
	
	//제품 수량
	private String productCount;
	
	//제품 금액
	private String productAmount;
	
	//할인율
	private String productDiscount;
	
	
	
}
