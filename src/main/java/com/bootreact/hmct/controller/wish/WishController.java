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

	
	//위시쇼룸 조회
	@GetMapping("/getWishShowroomList")
    public Map<String, Object> getWishShowroomList(@AuthenticationPrincipal String userId){
		
		try {
			
			List<Map<String, Object>> wishShowroomList = wishService.getWishShowroomList(userId);
			Map<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("wishShowroomList", wishShowroomList); 
			return resultMap;
    		
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
    		errorMap.put("error", e.getMessage());
    		return errorMap;
    	}
	}
		
		//위시아이템 조회 하기 
		@GetMapping("/getWishItemList")
	    public Map<String, Object> getWishItemList(@AuthenticationPrincipal String userId){
			
			try {
				
	    		List<Map<String, Object>> wishItemList = wishService.getWishItemList(userId);
	    		
	    		List<Map<String, Object>> wishShowroomList = wishService.getWishShowroomList(userId);
	    		
	    		Map<String, Object> resultMap = new HashMap<String, Object>();
	    		
	    		resultMap.put("wishItemList", wishItemList);  
	    		resultMap.put("wishShowroomList", wishShowroomList);
	    		
	    		return resultMap;
	    		
	    	}catch(Exception e){
	    		Map<String, Object> errorMap = new HashMap<String, Object>();
	    		errorMap.put("error", e.getMessage());
	    		return errorMap;
	    	}
	}
	
	//위시아이템 담기 
	@PostMapping("/addWishItem")
	public String addWishItem(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		System.out.println(paramMap.toString());
		System.out.println(paramMap.get("productNo"));
		System.out.println(userId);
		
		
		int productNo = Integer.parseInt(paramMap.get("productNo"));
		
		
		wishService.addWishItem(userId, productNo);
		
		return "addWishItem Success";
	}
	
	//위시아이템 삭제 
		@PostMapping("/deleteWishItem")
		public String deleteWishItem(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
			
			System.out.println(paramMap.toString());
			System.out.println(paramMap.get("productNo"));
			System.out.println(userId);
			
			int productNo = Integer.parseInt(paramMap.get("productNo").toString());
			
			wishService.deleteWishItem(userId, productNo);
			
			
			
			return "deleteWishItem Success";
		}
	
	//위시쇼룸 담기 
	@PostMapping("/addWishShowroom")
	public String addWishShowroom(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		System.out.println(paramMap.toString());
		System.out.println(paramMap.get("showroomNo"));
		System.out.println(userId);
		
		int showroomNo = Integer.parseInt(paramMap.get("showroomNo"));
		wishService.addWishShowroom(userId, showroomNo);
		
		return "addwishshowroom success";
	}
	
	//위시쇼룸 삭제 
	@PostMapping("/deleteWishShowroom")
	public String deleteWishShowroom(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		System.out.println(paramMap.toString());
		System.out.println(paramMap.get("showroomNo"));
		System.out.println(userId);
		
		int showroomNo = Integer.parseInt(paramMap.get("showroomNo").toString());
		
		wishService.deleteWishShowroom(userId, showroomNo);
		
		
		
		return "deleteWishshowroom success";
	}
	
	
    
}



