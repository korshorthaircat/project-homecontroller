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
@Table(name="T_HMCT_EXCHN")
@Data
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
@DynamicUpdate
public class Exchange {
	
	//교환 번호(PK)
	@Id
	private int exchangeNo;
	
	//주문 번호(FK)
	@OneToOne
	@JoinColumn(name="ORDER_NO")
	private Order order;

	//교환 신청일자
	@Column(nullable = false)
	private LocalDateTime exchangeRgsdate = LocalDateTime.now();
	
	//교환 접수일자
	@Column(nullable = false)
	private LocalDateTime exchangeMdfdate = LocalDateTime.now();
	
	//교환 처리상태
	@Column(nullable = false)
	private String exchangeStatus;
	
	private String exchangeReason;

}
