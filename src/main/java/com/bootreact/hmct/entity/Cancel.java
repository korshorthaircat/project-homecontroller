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
@Table(name="T_HMCT_CANCEL")
@Data
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
@DynamicUpdate
public class Cancel {
	
	//취소 번호(PK)
	@Id
	private int cancelNo;
	
	//주문 번호(FK)
	@OneToOne
	@JoinColumn(name="ORDER_NO")
	private Order order;

	//취소 신청일자
	@Column(nullable = false)
	private LocalDateTime cancelRgsdate = LocalDateTime.now();
	
	//취소 접수일자
	@Column(nullable = false)
	private LocalDateTime cancelMdfdate = LocalDateTime.now();

	//취소 처리상태
	@Column(nullable = false)
	private String cancelStatus;
	
	//취소 금액
	@Column
	private String cancelAmount;
	
	//취소 사유
	private String cancelReason;
	
}
