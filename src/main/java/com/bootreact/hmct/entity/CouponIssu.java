package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_COUPON")
@Data
public class CouponIssu {
	
	//쿠폰 번호 
	@Column(nullable = false)
	private String couponNo;
	
	//회원 아이디 
	@Column(nullable = false)
	private String userId;
	
	//쿠폰 사용여부
	@Column(nullable = false)
	private String couponUseYn;
	
	
}
