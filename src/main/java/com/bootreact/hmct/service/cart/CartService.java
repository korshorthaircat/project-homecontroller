package com.bootreact.hmct.service.cart;

import java.util.List;
import java.util.Map;

import com.bootreact.hmct.entity.Cart;

public interface CartService {
	List<Cart> getCartList(String userId);
	
	List<Map<String, Object>> getCartMapList(String userId);
}
