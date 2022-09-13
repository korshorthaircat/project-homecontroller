package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
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

	//제품옵션(PK, FK)
	@Id
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name = "PRODUCT_NO", referencedColumnName="PRODUCT_NO"),
		@JoinColumn(name = "COMMON_CODE", referencedColumnName="COMMON_CODE")
	})
	private ProductOption productOption;
		
	//제품 수량
	@Column
	private String productCount;
	
	//제품 금액
	@Column
	private String productAmount;
	
	//제품당 개별 할인액
	@Column
	private String productDiscount;
	
}
