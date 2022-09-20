package com.bootreact.hmct.service.refund;

import java.util.Map;

public interface RefundService {
	
	int createCancelNo();
	int createRefundNo();
	void addCancel(int cancelNo, int orderNo, String cancelAmount, String cancelStatus, String cancelReason);
	
}
