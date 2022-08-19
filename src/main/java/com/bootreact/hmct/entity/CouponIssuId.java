package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class CouponIssuId implements Serializable {
	
	private int coupon;
	private String user;

}
