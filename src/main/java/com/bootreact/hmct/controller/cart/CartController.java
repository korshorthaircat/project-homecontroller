package com.bootreact.hmct.controller.cart;


import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Cart;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.jwt.JwtTokenProvider;
import com.bootreact.hmct.service.cart.CartService;
import com.bootreact.hmct.service.product.ProductService;
 
@RestController
@RequestMapping("/api/cart")
public class CartController {
	 
	@Autowired CartService cartService;
	@Autowired ProductService productService;
	@Autowired private JwtTokenProvider jwtTokenProvider;
	@Autowired private PasswordEncoder passwordEncoder;

	//<메인 페이지, 위시아이템 페이지> 장바구니 제품추가 (대표 컬러로 추가됨)
	@PostMapping("/addCart")
	public String addCart(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		
//			System.out.println(paramMap.toString());
//			System.out.println(userId);
//			System.out.println(paramMap.get("productNo"));
//			System.out.println(paramMap.get("commonCode"));
			
			int productCount = 1;
			String commonCode = productService.getRepresentativeCommonCode(
					Integer.parseInt(paramMap.get("productNo"))
					);
			
			//추가 처리하기
			cartService.addCart(userId, 
								paramMap.get("productNo"),
								commonCode,
								productCount);
			
    		return "add cart success";
	}
	
	//<상세 페이지> 장바구니 제품추가 (선택한 컬러로 추가됨)
	@PostMapping("/addCartAtDetail")
	public String addCartAtDetail(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		
//			System.out.println("카트에 넣으려고 하는 유저아이디" + userId);
//			System.out.println("카트에 넣으려고 하는 제품번호" + paramMap.get("productNo"));
//			System.out.println("카트에 넣으려고 하는 커먼코드" + paramMap.get("commonCode")); //ok
			
			int productCount = 1;
			
			//추가 처리하기
			cartService.addCart(userId, 
								paramMap.get("productNo"),
								paramMap.get("commonCode"),
								productCount);
			
    		return "add cart success";
	}
	
//	//장바구니 제품수정 (수량 변경) 
	@PutMapping("/updateCart")
	public ResponseEntity<?>updateCart(@RequestBody Map<String, String> paramMap) {
		try {
//			System.out.println(paramMap.get("userId"));
//			System.out.println(paramMap.get("productNo"));
//			System.out.println(paramMap.get("commonCode"));
//			System.out.println(paramMap.get("productCount"));
			
			//수정 처리하기
			cartService.updateCart(paramMap.get("userId"),
								paramMap.get("productNo"),
								paramMap.get("commonCode"),
								paramMap.get("productCount"));
			
			//수정 후 장바구니리스트 다시 받아오기
    		List<Cart> cartList = cartService.getCartList(paramMap.get("userId"));
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setData(cartList);
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
	}
	
	//장바구니 제품삭제 (DELETE)
	@DeleteMapping("/deleteCart")
	public ResponseEntity<?> deleteCart(@RequestBody Map<String, String> paramMap) {
		try {
//			System.out.println(paramMap.get("userId"));
//			System.out.println(paramMap.get("productNo"));
//			System.out.println(paramMap.get("commonCode"));
			
			//삭제 처리하기
			cartService.deleteCart(paramMap.get("userId"), 
								   paramMap.get("productNo"),
								   paramMap.get("commonCode"));
			
			//삭제 후 장바구니리스트 다시 받아오기
    		List<Cart> cartList = cartService.getCartList(paramMap.get("userId"));
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setData(cartList);
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
	}	

	//장바구니 제품리스트 조회 (이미지 포함X)
	@PostMapping("/getCartList")
    public ResponseEntity<?> getCartList(@RequestBody User user){
		//'조회'라고 해서 무조건 'get'요청을 보내는 것은 아님.
		//data: { userId: "gogo" }를 보내주기 위해서는 'post'요청을 보내야 함.
		//매개변수에는 userId가 아니라 User엔티티를 넣어주어야 했음.
		//이 때 @authenticationprincipal 어노테이션을 붙일 경우 로그인한 사용자일 때만 getCartList()를 사용 가능함
		//추후에 로그인한 경우에만 장바구니 조회할 수 있게 수정할 때 어노테이션도 바꿔줘야 함
		try {
			//직접 쿼리작성 없이 JPA로 조인&셀렉트하고 싶은 경우 아래와 같이 함
    		List<Cart> cartList = cartService.getCartList(user.getUserId());
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setData(cartList);
    		return ResponseEntity.ok().body(response);
    		
    		//직접 작성한 쿼리로 매퍼 사용하고 싶은 경우 아래와 같이 함
//    		List<Map<String, Object>> cartList = cartService.getCartMapList(user.getUserId());    		
//    		ResponseDTO<Map<String, Object>> response = new ResponseDTO<>();
//    		response.setData(cartList);
//    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<Cart> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);	
    	}
	}
	
	//장바구니 제품이미지 리스트 조회
	@PostMapping("/getCartImageList")
    public Map<String, Object> getCartImageList(@RequestBody User user){
		try {

			List<Map<String, Object>> cartImageList = cartService.getCartImageList(user.getUserId());
			
			Map<String, Object> returnMap = new HashMap<String, Object>();

			returnMap.put("cartImageList", cartImageList);
			
			return returnMap; 
    		
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;	
    	}
	}
	
	//장바구니 제품 정보 & 이미지 리스트 조회
	@PostMapping("/getCartMapList")
    public Map<String, Object> getCartMapList(@RequestBody User user){
		try {

			List<Cart> cartList = cartService.getCartList(user.getUserId());
			List<Map<String, Object>> cartImageList = cartService.getCartImageList(user.getUserId());
			
			Map<String, Object> returnMap = new HashMap<String, Object>();

			returnMap.put("cartList", cartList);
			returnMap.put("cartImageList", cartImageList);
			
			return returnMap; 
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;	
    	}
	}
	
}
