package com.bootreact.hmct.service.refund;

import java.util.Map;

public interface RefundService {
	
	int createCancelNo();
	void addCancel(int orderNo, String cancelNo, String cancelAmount, String cancelStatus, String cancelReason);
	
}
