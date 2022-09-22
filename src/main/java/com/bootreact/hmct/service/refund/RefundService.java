package com.bootreact.hmct.service.refund;

import java.util.Map;

public interface RefundService {
	
	int createCancelNo();
	int createRefundNo();
	int createRetunNo();
	int createExchangeNo();
	
	void addCancel(int cancelNo, int orderNo, String cancelAmount, String cancelStatus, String cancelReason);
	void addRefund(int refundNo, int cancelNo,String refundStatus, String refundAmount, String refundBank, String refundAccount, String refundName);
	void addRetun(int retunNo, int orderNo, String retunAmount, String retunState, String retunReason); 
	void addRefundsc(int refundNo, int retunNo,String refundStatus, String refundAmount, String refundBank, String refundAccount, String refundName);
	void addExchange(int exchangeNo, int orderNo, String exchangeStatus, String exchangeReason);
	
}
