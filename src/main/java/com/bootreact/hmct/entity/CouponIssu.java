package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_COUPON")
@Data
@IdClass(CouponIssuId.class)
public class CouponIssu {
	
	//쿠폰 번호(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="COUPON_NO")
	private Coupon coupon;
	
	//회원 아이디(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;
	
	//쿠폰 사용여부
	@Column(nullable = false)
	private String couponUseYn;
	
	
}
