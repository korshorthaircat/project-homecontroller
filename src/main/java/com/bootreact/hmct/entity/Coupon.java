package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_COUPON")
@Data
public class Coupon {

	//쿠폰 번호(PK)
	@Id
	private int couponNo;
	
	//쿠폰 이름 
	@Column(nullable = false)
	private String couponName;
	
	//쿠폰 유효기간 
	@Column(nullable = false)
	private LocalDateTime couponExpdate;
	
	//쿠폰 방식(P, W) 
	@Column(nullable = false)
	private String couponMethod;
	
	//쿠폰금액(P:%, W:원)
	@Column(nullable = false)
	private String couponPrice;
}
