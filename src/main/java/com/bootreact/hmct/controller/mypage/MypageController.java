package com.bootreact.hmct.controller.mypage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.Column;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.UserDTO;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.jwt.JwtTokenProvider;
import com.bootreact.hmct.service.cart.CartService;
import com.bootreact.hmct.service.inquiry.InquiryService;
import com.bootreact.hmct.service.mypage.MypageService;
import com.bootreact.hmct.service.order.OrderService;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.review.ReviewService;
import com.bootreact.hmct.service.user.UserService;
import com.bootreact.hmct.service.wish.WishService;

@RestController
@RequestMapping("/api/mypage")
public class MypageController {

//	@Autowired
//	OrderService orderService;

	@Autowired
	UserService userService;

//	@Autowired
//	ProductService productService;

//	@Autowired
//	CartService cartService;

//	@Autowired
//	ReviewService reviewService;

//	@Autowired
//	InquiryService inquiryService;

//	@Autowired
//	MypageService mypageService;

//	@Autowired
//	WishService wishService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

}
