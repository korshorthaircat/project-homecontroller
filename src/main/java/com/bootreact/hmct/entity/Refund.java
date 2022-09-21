package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCT_REFND")
@Data
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
@DynamicUpdate
public class Refund {
	
	//환불 번호(PK)
	@Id
	private int refundNo;
	
	//반품 번호(FK)
	@OneToOne
	@JoinColumn(name="RETUN_NO")
	private Retun retun;
	
	//취소 번호(FK)
	@OneToOne
	@JoinColumn(name="CANCEL_NO")
	private Cancel cancel;
	
	//환불 완료일자
	@Column(nullable = false)
	private LocalDateTime refundDate = LocalDateTime.now();
	
	//환불 처리상태
	@Column(nullable = false)
	private String refundStatus;
	
	//환불 금액
	@Column
	private String refundAmount;
	
	//사용한 포인트
	@Column
	private String refundUsedPoint;
	
	//환불 은행
	@Column
	private String refundBank;
	
	//환불 계좌
	@Column
	private String refundAccount;
	
	//예금자명
	@Column
	private String refundName;

}
