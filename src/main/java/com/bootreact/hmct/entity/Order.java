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
    
	//주문 번호(PK) 
	@Id
	private String orderNo;
	
	//회원 아이디(FK)
	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;
	
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
