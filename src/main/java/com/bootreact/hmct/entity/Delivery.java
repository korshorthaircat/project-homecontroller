package com.bootreact.hmct.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCT_DLVY")
@Data
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
@DynamicUpdate
public class Delivery {
    
	//배송 번호(PK)
	@Id
	private int deliveryNo;
	
	//주문 번호(FK)
	@OneToOne
	@JoinColumn(name="ORDER_NO")
	private Order order;
	
	//수령인 이름
	private String deliveryName;
	
	//수령인 전화번호
	private String deliveryTel;
	
	//수령인 주소
	private String deliveryAddress;
	
	//수령인 상세주소
	private String deliveryDetailAddress;
	
	//수령인 우편번호
	private String deliveryZipcode;
	
	//배송메시지
	private String deliveryMessage;
	
	//운송장 번호
	private String deliveryTrackingNo;
	
}
