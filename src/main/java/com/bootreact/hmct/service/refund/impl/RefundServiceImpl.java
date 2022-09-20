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
    
    //번호들 생성
    @Override
   	public int createCancelNo() {
   		return refundMapper.createCancelNo();
   	}
    
    @Override
   	public int createRefundNo() {
   		return refundMapper.createRefundNo();
   	}
    
  	//주문취소
    @Override
	public void addCancel(int cancelNo, int orderNo,  String cancelAmount, String cancelStatus, String cancelReason ) {
    	//취소 정보 입력
    	refundMapper.addCancel(cancelNo, orderNo,  cancelAmount, cancelStatus, cancelReason);
    	
    	//환불 정보 입력
    	
    	//주문상태 업데이트
	}
    
    @Override
    public void addRefund(int refundNo, int cancelNo,String refundStatus, String refundAmount, String refundBank, String refundAccount, String refundName) {
    	refundMapper.addRefund(refundNo, cancelNo, refundStatus, refundAmount, refundBank, refundAccount, refundName);
    }
    
    
    
   
}
