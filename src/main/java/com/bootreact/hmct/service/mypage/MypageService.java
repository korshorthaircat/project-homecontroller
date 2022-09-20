package com.bootreact.hmct.service.mypage;

import java.util.List;
import java.util.Map;

import com.bootreact.hmct.entity.ChangePw;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.entity.User;

public interface MypageService {

	List<Order> getMyOrderList();

	Map<String, Object> ChangePw(ChangePw prm);
	
	}
	

