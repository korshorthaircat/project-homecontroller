package com.bootreact.hmct.service.refund.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.mapper.RefundMapper;
import com.bootreact.hmct.repository.RefundRepository;
import com.bootreact.hmct.service.refund.RefundService;

@Service
public class RefundServiceImpl implements RefundService{
    
    @Autowired
    RefundRepository refundRepository;
     
    @Autowired
    RefundMapper refundMapper;
    
  	//주문취소
    @Override
	public void addCancel(int orderNo, String cancelNo, String cancelAmount, String cancelStatus, String cancelReason) {
    	//취소 정보 입력
    	refundMapper.addCancel(orderNo, cancelNo, cancelAmount, cancelStatus, cancelReason);
    	
    	//환불 정보 입력
    	
    	
    	//주문상태 업데이트
	}
    
    @Override
	public int createCancelNo() {
		return refundMapper.createCancelNo();
	}
}
