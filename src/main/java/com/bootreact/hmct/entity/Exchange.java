package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_EXCHN")
@Data
public class Exchange {
	//PK, FK(주문번호) 설정 필요
	
	//교환 번호
	@Id
	@Column(nullable = false)
	private String exchangeNo;

	//교환 신청일자
	@Column(nullable = false)
	private String exchangeRgsdate;
	
	//교환 접수일자
	@Column(nullable = false)
	private String exchangeMdfdate;
	
	//교환 처리상태
	@Column(nullable = false)
	private String exchangeStatus;
	
	//주문번호
	@Column(nullable = false)
	private String orderNo;
}
