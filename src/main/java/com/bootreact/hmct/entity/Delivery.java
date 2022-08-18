package com.bootreact.hmct.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_DLVY")
@Data
public class Delivery {
    
	//배송 번호(PK)
	@Id
	private String deliveryNo;
	
	//주문 번호(FK)
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
