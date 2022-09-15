package com.bootreact.hmct.controller.wish;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.entity.WishItem;
import com.bootreact.hmct.entity.WishShowroom;
import com.bootreact.hmct.jwt.JwtTokenProvider;
import com.bootreact.hmct.service.mypage.MypageService;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.showroom.ShowroomService;
import com.bootreact.hmct.service.user.UserService;
import com.bootreact.hmct.service.wish.WishService;


@RestController
@RequestMapping("/api/wishlist")
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
	ShowroomService showroomService;
	
	@Autowired	
	MypageService mypageService;

	
	//위시아이템 조회 
	@GetMapping("/getWishItemList")
    public Map<String, Object> getWishItemList(@AuthenticationPrincipal String userId){
		
		try {
			//직접 쿼리작성 없이 JPA로 조인&셀렉트하고 싶은 경우 아래와 같이 함
    		List<Map<String, Object>> wishItemList = wishService.getWishItemList(userId);
    		
    		Map<String, Object> resultMap = new HashMap<String, Object>();
    		
    		resultMap.put("wishItemList", wishItemList);
    		
    		return resultMap;
    		
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
    		errorMap.put("error", e.getMessage());
    		return errorMap;
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
	
	@PostMapping("/addWishItem")
	public String addWishItem(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		System.out.println(paramMap.toString());
		System.out.println(paramMap.get("productNo"));
		System.out.println(userId);
		
		
		int productNo = Integer.parseInt(paramMap.get("productNo"));
		
		
		wishService.addWishItem(userId, productNo);
		
		return "addWishItem Success";
	}
    
}
