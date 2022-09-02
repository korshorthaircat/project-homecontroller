package com.bootreact.hmct.controller.cart;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.dto.UserDTO;
import com.bootreact.hmct.entity.Cart;
import com.bootreact.hmct.jwt.JwtTokenProvider;
import com.bootreact.hmct.service.cart.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
	
	@Autowired
	CartService cartService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

//	//장바구니 제품추가 (POST)
//	void addCart(Product product) {}
//
//	//장바구니 제품삭제 (DELETE)
//	void deleteCart(Product product) {}
//
//	//장바구니 제품수정(수량 등) (GET, POST)
//	void updateCart(Product product) {}
//
	//장바구니 제품리스트 조회 (GET)
	//JPA로 테이블 쪼인&셀렉트
	@GetMapping("/getCartList")
    public ResponseEntity<?> getCartList(@AuthenticationPrincipal String userId){
		try {
    		List<Cart> cartList = cartService.getCartList(userId);
    		
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setData(cartList);
    		return ResponseEntity.ok().body(response);
    		
//  		JPA로 조인하기 안 될 경우 DTO에 맵 담아서 하는 식으로 시도하기
//    		Map<Cart> cartList = cartService.getCartList(userId);
//    		ResponseDTO<Map<String, Object>> response = new ResponseDTO<>();
//    		response.setData(cartList);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
	}
	
}
