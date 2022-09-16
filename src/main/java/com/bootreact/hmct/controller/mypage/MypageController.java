package com.bootreact.hmct.controller.mypage;

import java.util.ArrayList;
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;   

import com.bootreact.hmct.dto.OrderDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.jwt.JwtTokenProvider;
import com.bootreact.hmct.service.cart.CartService;
//import com.bootreact.hmct.service.inquiry.InquiryService;
import com.bootreact.hmct.service.mypage.MypageService;
import com.bootreact.hmct.service.order.OrderService;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.review.ReviewService;
import com.bootreact.hmct.service.user.UserService;
import com.bootreact.hmct.service.wish.WishService;

@RestController
@RequestMapping("/api/mypage")
public class MypageController {

	@Autowired
	OrderService orderService;

	@Autowired
	UserService userService;

	@Autowired
	ProductService productService;

	@Autowired
	CartService cartService;

	@Autowired
	ReviewService reviewService;

//	@Autowired
//	InquiryService inquiryService;

	@Autowired
	MypageService mypageService;

	@Autowired
	WishService wishService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	
	/**
	 * Mypage 사용자 정보 변경
	 */
	@PostMapping("updateUserInfo")
	public ResponseEntity<?> updateUserInfo(
		@RequestBody User user
	){
		// 등록된 사용자 정보를 조회한다 
		User oldUser = userService.findbyUserId(user.getUserId());

		// 화면 input 항목에서 받아온 값들을 변경한다 
		oldUser.setUserName(user.getUserName());
		oldUser.setUserNickname(user.getUserNickname());
		oldUser.setUserTel(user.getUserTel());
		oldUser.setUserMail(user.getUserMail());
		oldUser.setUserZip(user.getUserZip());
		oldUser.setUserAddr(user.getUserAddr());
		oldUser.setUserAddrDetail(user.getUserAddrDetail());

		// 실제 DB 저장 
		userService.updateUser(oldUser);

		return ResponseEntity.ok().body("success");
	}
	
	/**
	 * Mypage 사용자 탈퇴 
	 */
	@PostMapping("deleteUserInfo")
	public ResponseEntity<?> deleteUserInfo(
		@RequestBody User user){
		// 등록된 사용자 정보를 조회한다 
		User oldUser = userService.findbyUserId(user.getUserId());
		
		if(oldUser == null) {
			return ResponseEntity.ok().body("이미 탈퇴한 회원입니다");
		}else {
			// DB에서 삭제 
			userService.deleteUser(oldUser);
			return ResponseEntity.ok().body("탈퇴 성공!");
			
		}
	}
	
	
	//Mypage 내가작성한 게시글 조회 
//	@PostMapping("myInquiryList")
//	public ResponseEntity<?> myInquiryList(@RequestBody User user, @RequestBody Inquiry inquiry) {
//		// 등록된 사용자 정보를 조회한다 
//		User oldUser = userService.findbyUserId(user.getUserId());
//		Inquiry myInquiry = inquiryService.
//
//		// 화면 input 항목에서 값을 받아온다 
//		oldUser.setUserName(user.getUserName());
//		oldUser.setUserNickname(user.getUserNickname());
//		oldUser.setUserTel(user.getUserTel());
//		oldUser.setUserMail(user.getUserMail());
//		oldUser.setUserZip(user.getUserZip());
//		oldUser.setUserAddr(user.getUserAddr());
//		oldUser.setUserAddrDetail(user.getUserAddrDetail());
//
//		// 실제 DB 저장 
//		userService.updateUser(oldUser);
//
//		return ResponseEntity.ok().body("success");
//	}
	
	
	/**
	 * Mypage 나의 주문내역 조회
	 */
	@GetMapping("/getMyOrderList")
    public ResponseEntity<?> getMyOrderList(@AuthenticationPrincipal String userId){
    	try {

//    		System.out.println(userId); //Ok
    		List<Order> orderList = orderService.getMyOrderList(userId);
    		    	
    		List<OrderDTO> orderDTOList = new ArrayList<OrderDTO>();
    		
    		for(Order t: orderList) {
    			OrderDTO orderDTO = new OrderDTO();
    			
    			orderDTO.setOrderNo(t.getOrderNo());
    			orderDTO.setUser(t.getUser());  
    			orderDTO.setOrderStatus(t.getOrderStatus());
    			orderDTO.setOrderDate(t.getOrderDate());
    			orderDTO.setOrderMemo(t.getOrderMemo());
    			orderDTO.setOrderAmount(t.getOrderAmount());
    			orderDTO.setOrderDiscount(t.getOrderDiscount());
    			orderDTO.setOrderFee(t.getOrderFee());
    			
    			orderDTOList.add(orderDTO);	
    		}
    		ResponseDTO<OrderDTO> response = new ResponseDTO<>();
    		
    		response.setData(orderDTOList);
    		
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<OrderDTO> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
    }
	
	
	
	
	
}
