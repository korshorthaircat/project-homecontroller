package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_PMT")
@Data
public class Payment {
	
	//결제 번호(PK)
	@Id
	private String paymentNo;
	
	//주문 번호(FK)
	@JoinColumn(name="ORDER_NO")
	private Order order;
	
	//결제 금액
	@Column(nullable = false)
	private String paymentAmount;
	
	//결제 일시
	@Column(nullable = false)
	private LocalDateTime paymentDate = LocalDateTime.now();
	
	//결제 수단
//	@Column(nullable = false)
//	private String paymentMean;
	
	

}
