package com.bootreact.hmct.service.coupon;

public interface CouponService{

	int createCouponNo();

	void addCouponIssu(int couponNo, String userId, String couponUseYn);

	void addCoupon(int couponNo, String couponName, String couponExpdate, String couponMethod, String couponPrice);

}
