package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_CANCEL")
@Data
public class Cancel {
	//PK, FK(주문번호) 설정 필요
	
	//주문취소번호
	@Id
	@Column(nullable = false)
	private String cancelNo;

	//주문취소 신청일자
	@Column(nullable = false)
	private String cancelRgsdate;
	
	//주문취소 접수일자
	@Column(nullable = false)
	private String cancelMdfdate;

	//주문취소 금액
	@Column(nullable = false)
	private String cancelAmount;
	
	//주문취소 처리상태
	@Column(nullable = false)
	private String cancelStatus;
	
	//주문번호
	@Column(nullable = false)
	private String orderNo;
}
