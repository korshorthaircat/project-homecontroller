package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_RETUN")
@Data
public class Return {
	//PK, FK(주문번호) 설정 필요
	
	//반품번호
	@Id
	@Column(nullable = false)
	private String returnNo;

	//반품신청일자
	@Column(nullable = false)
	private String returnRegdate;
	
	//반품접수일자 
	@Column(nullable = false)
	private String returnMdfdate;
	
	//반품처리상태
	@Column(nullable = false)
	private String returnState;
	
	//운송장번호
	@Column(nullable = false)
	private String returnTrackingNo;
	
	//주문번호
	@Column(nullable = false)
	private String orderNo;
}
