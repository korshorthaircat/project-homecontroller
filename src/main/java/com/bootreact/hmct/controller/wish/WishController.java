package com.bootreact.hmct.controller.wish;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Cart;
import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishShowroom;
import com.bootreact.hmct.jwt.JwtTokenProvider;
import com.bootreact.hmct.service.mypage.MypageService;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.user.UserService;
import com.bootreact.hmct.service.wish.WishService;


@RestController
@RequestMapping("/wish")
public class WishController {
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
    WishService wishService;

	@Autowired
	UserService userService;

	@Autowired
	ProductService productService;
	
	@Autowired	
	MypageService mypageService;

	
	//위시아이템 조회 
	@PostMapping("/getWishItemList")
    public ResponseEntity<?> getWishItemList(@RequestBody User user){
		
		try {
			//직접 쿼리작성 없이 JPA로 조인&셀렉트하고 싶은 경우 아래와 같이 함
    		List<WishItem> wishItmList = wishService.getWishItemList(user.getUserId());
    		ResponseDTO<WishItem> response = new ResponseDTO<>();
    		response.setData(wishItmList);
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<WishItem> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
	}
	
	
	//위시쇼룸 조회
	@PostMapping("/getWishShowroomList")
    public ResponseEntity<?> getWishShowroomList(@RequestBody User user){
		
		try {
			//직접 쿼리작성 없이 JPA로 조인&셀렉트하고 싶은 경우 아래와 같이 함
    		List<WishShowroom> wishShowroomList = wishService.getWishShowroomList(user.getUserId());
    		ResponseDTO<WishShowroom> response = new ResponseDTO<>();
    		response.setData(wishShowroomList);
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<WishShowroom> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);
    	}
	}
    
}
