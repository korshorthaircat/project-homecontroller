package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_RETUN")
@Data
public class Retun {
	
	//반품 번호(PK) 
	@Id
	private String retunNo;
	
	//주문 번호(FK)
	@OneToOne
	@JoinColumn(name="ORDER_NO")
	private Order order;

	//반품 신청일자
	@Column(nullable = false)
	private LocalDateTime retunRgsdate = LocalDateTime.now();
	
	//반품 접수일자 
	@Column(nullable = false)
	private LocalDateTime retunMdfdate = LocalDateTime.now();
	
	//반품 처리상태
	@Column(nullable = false)
	private String retunState;
	
	//운송장번호
	@Column
	private String retunTrackingNo;
	
	
}
