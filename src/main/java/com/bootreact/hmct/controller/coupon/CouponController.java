package com.bootreact.hmct.controller.coupon;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.service.coupon.CouponService;

@RestController
@RequestMapping("/api/coupon")
public class CouponController {
	
	@Autowired CouponService couponService;
	
	//쿠폰 발급받기
	@PostMapping("/createCoupon")
	public String createCoupon(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		
		//쿠폰 번호 생성하기
		int couponNo = couponService.createCouponNo();
		//쿠폰 사용 여부
		String couponUseYn = "N";
		
		System.out.println("/////////////////////////////////////////"+couponNo);
		
		//CouponIssu 테이블에 인서트
		couponService.addCouponIssu(couponNo, userId, couponUseYn);
		
		//Coupon 테이블에 인서트
		//쿠폰 이름, 쿠폰 만료기간, 쿠폰방식(정액/정률), 할인금액을 파람맵에서 받아온다.
		couponService.addCoupon(couponNo,
								paramMap.get("couponName").toString(),
								paramMap.get("couponExpdate").toString(),
								paramMap.get("couponMethod").toString(),
								paramMap.get("couponPrice").toString()
								);
		
		return "Ok";
	}

}
