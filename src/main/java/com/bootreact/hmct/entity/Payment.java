package com.bootreact.hmct.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_PMT")
@Data
public class Payment {
	
	//주문번호
	
	@JoinColumn(name="orderNo")
	private Order order;
	
	//결제 번호
	@Id
	private String paymentNo;
	
	//결제 수단
	private String paymentAmount;
	
	//결제 일시
	private String paymentDate;
	
	

}
