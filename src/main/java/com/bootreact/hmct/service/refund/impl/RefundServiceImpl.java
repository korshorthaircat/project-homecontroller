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
    
    @Override
   	public int createRetunNo() {
   		return refundMapper.createRetunNo();
   	}
    
    @Override
   	public int createExchangeNo() {
   		return refundMapper.createExchangeNo();
   	}
    
    
  	//주문취소
    @Override
	public void addCancel(int cancelNo, int orderNo,  String cancelAmount, String cancelStatus, String cancelReason ) {
    	refundMapper.addCancel(cancelNo, orderNo,  cancelAmount, cancelStatus, cancelReason);
	}
       
    //주문취소- 환불 정보 입력
    @Override
    public void addRefund(int refundNo, int cancelNo,String refundStatus, String refundAmount, String refundBank, String refundAccount, String refundName) {
    	refundMapper.addRefund(refundNo, cancelNo, refundStatus, refundAmount, refundBank, refundAccount, refundName);
    }
    
    //반품 
    @Override
	public void addRetun(int retunNo, int orderNo,  String retunAmount, String retunState, String retunReason ) {
    	refundMapper.addRetun(retunNo, orderNo,  retunAmount, retunState, retunReason);
	}
    
    //반품- 환불 정보 입력
    @Override
    public void addRefundsc(int refundNo, int retunNo,String refundStatus, String refundAmount, String refundBank, String refundAccount, String refundName) {
    	refundMapper.addRefundsc(refundNo, retunNo, refundStatus, refundAmount, refundBank, refundAccount, refundName);
    }
    
    //교환
    @Override
	public void addExchange(int exchangeNo, int orderNo, String exchangeStatus, String exchangeReason ) {
    	refundMapper.addExchange(exchangeNo, orderNo, exchangeStatus, exchangeReason);
	}
}
