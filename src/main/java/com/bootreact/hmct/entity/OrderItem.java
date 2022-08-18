package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.Data;

@Entity
@Table(name="T_HMCT_ORDRITEM")
@Data
@IdClass(OrderItemId.class)
public class OrderItem {
    
	//주문 번호(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="ORDER_NO")
	private Order order;

	//제품 번호(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="PRODUCT_NO")
	private Product product;			 
		
	//제품 수량
	@ColumnDefault("'1'")
	private String productCount;
	
	//제품 금액
	@Column
	private String productAmount;
	
	//할인율
	@Column
	private String productDiscount;
	
}
