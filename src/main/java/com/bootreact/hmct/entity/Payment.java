package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCT_PMT")
@Data
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
@DynamicUpdate
public class Payment {
	
	//결제 번호(PK)
	@Id
	private int paymentNo;
	
	//주문 번호(FK)
	@OneToOne
	@JoinColumn(name="ORDER_NO")
	private Order order;
	
	//결제 금액
	@Column(nullable = false)
	private String paymentAmount;
	
	//결제 일시
	@Column(nullable = false)
	private LocalDateTime paymentDate = LocalDateTime.now();
	
	//결제 방식
	@Column(nullable = false)
	private String paymentWay;
	
	//입금자 
	@Column(nullable = false)
	private String paymentName;
	
	//입금 계좌
	

}
