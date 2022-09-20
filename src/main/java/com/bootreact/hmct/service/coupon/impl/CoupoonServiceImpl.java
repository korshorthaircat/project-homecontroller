package com.bootreact.hmct.service.coupon.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.mapper.CouponMapper;
import com.bootreact.hmct.service.coupon.CouponService;

@Service
public class CoupoonServiceImpl implements CouponService {
	
	@Autowired
	private CouponMapper couponMapper;

	@Override
	public int createCouponNo() {
		return couponMapper.createCouponNo();
	}

	@Override
	public void addCouponIssu(int couponNo, String userId, String couponUseYn) {
		couponMapper.addCouponIssu(couponNo, userId, couponUseYn);
	}

	@Override
	public void addCoupon(int couponNo, String couponName, String couponExpdate, String couponMethod,
			String couponPrice) {
		couponMapper.addCouponIssu(couponNo, couponName, couponExpdate, couponMethod);
	}

}
