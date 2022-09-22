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
@Table(name="T_HMCT_RETUN")
@Data
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
@DynamicUpdate
public class Retun {
	
	//반품 번호(PK) 
	@Id
	private int retunNo; 
	
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
	@Column(nullable = false)
	private String retunTrackingNo;
	
	//취소 금액
	@Column
	private String retunAmount;
	
	private String retunReason;

}
