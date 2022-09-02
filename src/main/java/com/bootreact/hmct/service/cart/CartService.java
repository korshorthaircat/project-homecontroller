package com.bootreact.hmct.service.cart;

import java.util.List;

import com.bootreact.hmct.entity.Cart;

public interface CartService {
	List<Cart> getCartList(String userId);
}
