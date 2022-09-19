package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CouponMapper {

	int createCouponNo();

	void addCouponIssu(int couponNo, String userId, String couponUseYn);

	void addCouponIssu(int couponNo, String couponName, String couponExpdate, String couponMethod);



}
