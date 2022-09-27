package com.bootreact.hmct.controller.mypage;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.InquiryDTO;
import com.bootreact.hmct.dto.OrderDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.dto.ReviewDTO;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.entity.Review;
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

import lombok.RequiredArgsConstructor;

import com.bootreact.hmct.entity.ChangePw;
import com.bootreact.hmct.entity.Inquiry;

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

	@Autowired
	InquiryService inquiryService;

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
	
	
	

	//비밀번호 변경 
	@PostMapping("/changeUserPw")
	public ResponseEntity<?> changeUserPw(@RequestBody ChangePw changePw) {
		System.out.println(changePw.toString());
		Map<String, Object> result = mypageService.ChangePw(changePw);
		return ResponseEntity.ok().body(result);
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
	
	//나의 게시글 조회 
	@PostMapping("/getMyInquiryList")
    public ResponseEntity<?> getMyInquiryList(@AuthenticationPrincipal String userId) {
		try {
			List<Inquiry> inquiryList = inquiryService.getMyInquiryList(userId);
			System.out.println(userId);
			
			List<InquiryDTO> inquiryDTOList = new ArrayList<InquiryDTO>();
 		
			for(Inquiry i : inquiryList) {
				InquiryDTO inquiryDTO = new InquiryDTO();
				
				inquiryDTO.setInquiryNo(i.getInquiryNo());
				inquiryDTO.setInquiryAnswer(i.getInquiryAnswer());
				inquiryDTO.setInquiryContent(i.getInquiryContent());
				inquiryDTO.setInquiryRgsdate(i.getInquiryRgsdate());
				inquiryDTO.setInquiryState(i.getInquiryState());
				inquiryDTO.setInquiryTitle(i.getInquiryTitle());
				inquiryDTO.setUser(i.getUser());
				
				inquiryDTOList.add(inquiryDTO);

			}
		System.out.println("왔어여?");
		ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
		
		response.setData(inquiryDTOList);
		
		return ResponseEntity.ok().body(response);
		
		
		}catch(Exception e) {
			System.out.println(e.getMessage());
			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}

		
	
//	//나의 상품리뷰 조회 
//	@PostMapping("/getMyReviewList")
//	public ResponseEntity<?> getMyReviewList(@AuthenticationPrincipal String userId) {
//		try {
//			//JPA 쓸 경우 - 리턴타입은 ResponseEntity<?>
//			List<Review> reivewList = reviewService.getMyReviewList(userId);
//			List<ReviewDTO> reviewDTOList = new ArrayList<ReviewDTO>();
//			for(Review r : reivewList) {
//				ReviewDTO reviewDTO = new ReviewDTO();
//				reviewDTO.setReviewNo(r.getReviewNo());
//				reviewDTO.setReviewTitle(r.getReviewTitle());
//				reviewDTO.setReviewContent(r.getReviewContent());
//				reviewDTO.setReviewGrade(r.getReviewGrade());
//				reviewDTO.setReviewRegdate(r.getReviewRegdate());
//				
//				reviewDTO.setProductNo(r.getOrderItem().getProductOption().getProduct().getProductNo());
//				reviewDTO.setCommonCode(r.getOrderItem().getProductOption().getCommon().getCommonCodeName());
//				reviewDTO.setUserId(r.getOrderItem().getOrder().getUser().getUserId());
//				reviewDTOList.add(reviewDTO);
//			}
//		ResponseDTO<ReviewDTO> response = new ResponseDTO<>();
//		response.setData(reviewDTOList);
//		return ResponseEntity.ok().body(response);
//			
//			//매퍼 쓸 경우 - 리턴타입은 Map<String, Object>
////						- 매개변수는 @RequestParam int productNo
////			List<Map<String, Object>> reviewList = reviewService.getReviewListByProductNo(productNo);
////			
////			Map<String, Object> returnMap = new HashMap<String, Object>();
////			returnMap.put("reviewList", reviewList);
////
////			return returnMap; 
//		
//		}catch(Exception e) {
//			System.out.println(e.getMessage());
//			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
//			response.setError(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//			
////    		Map<String, Object> errorMap = new HashMap<String, Object>();
////    		errorMap.put("error", e.getMessage());
////    		return errorMap;
//		}
//	}
	}
	
	
	
	
	
	

