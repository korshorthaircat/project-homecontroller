package com.bootreact.hmct.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.beans.factory.annotation.Autowired;

import com.bootreact.hmct.repository.UserRepository;

import lombok.Data;

@Entity
@Data
@Table(name="T_HMCT_ORDR")
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
@DynamicUpdate
public class Order {
	
	//주문 번호(PK) 
	@Id
	private int orderNo;
	
	//회원 아이디(FK)
	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;
	
	//주문상태
	private String orderStatus;
	
	//주문날짜
	private LocalDate orderDate = LocalDate.now();
	
	//관리자 메모
	private String 	orderMemo;
	
	//주문금액
	private String orderAmount;
	
	//할인액
	private String orderDiscount;
	
	//배송료
	private String orderFee;
		
}
