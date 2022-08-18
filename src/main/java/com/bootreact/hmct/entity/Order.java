package com.bootreact.hmct.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="T_HMCT_ORDR")
public class Order {
    
	//아이디
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
	
	//주문 번호
	@Id
	private String orderNo;
	
	//주문상태
	private String orderStatus;
	
	//주문날짜
	private String orderDate;
	
	//관리자 메모
	private String 	orderMemo;
	
	//주문금액
	private String orderAmount;
	
	//할인액
	private String orderDiscount;
	
	//배송료
	private String orderFee;

	
}
