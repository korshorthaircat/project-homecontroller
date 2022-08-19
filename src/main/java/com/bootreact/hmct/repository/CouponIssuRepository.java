package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.CouponIssu;
import com.bootreact.hmct.entity.CouponIssuId;

public interface CouponIssuRepository extends JpaRepository<CouponIssu, CouponIssuId>{

}
