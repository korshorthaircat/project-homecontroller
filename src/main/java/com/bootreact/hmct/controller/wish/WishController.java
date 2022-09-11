//package com.bootreact.hmct.controller.wish;
//
//import java.util.List;
//import java.util.Map;
//
//import javax.servlet.http.HttpServletRequest;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.bootreact.hmct.dto.ResponseDTO;
//import com.bootreact.hmct.entity.Cart;
//import com.bootreact.hmct.entity.Product;
//import com.bootreact.hmct.entity.User;
//import com.bootreact.hmct.service.mypage.MypageService;
//import com.bootreact.hmct.service.product.ProductService;
//import com.bootreact.hmct.service.user.UserService;
//import com.bootreact.hmct.service.wish.impl.WishServiceImpl;
//
//@RestController
//@RequestMapping("/wish")
//public class WishController {
//
//	@Autowired
//    WishServiceImpl wishService;
//
//	@Autowired
//	UserService userService;
//
//	@Autowired
//	ProductService productService;
//	
//	@Autowired	
//	MypageService mypageService;
//	
//  //위시아이템 조 
//  //위시컨트롤러에 상세페이지 url을 설정
// 	@PostMapping("/getWishItem")
//    public ResponseEntity<?> getWishItem(@RequestBody User user){
//		//'조회'라고 해서 무조건 'get'요청을 보내는 것은 아님.
//		//data: { userId: "gogo" }를 보내주기 위해서는 'post'요청을 보내야 함.
//		//매개변수에는 userId가 아니라 User엔티티를 넣어주어야 했음.
//		//이 때 @authenticationprincipal 어노테이션을 붙일 경우 로그인한 사용자일 때만 getCartList()를 사용 가능함
//		//추후에 로그인한 경우에만 장바구니 조회할 수 있게 수정할 때 어노테이션도 바꿔줘야 함
//		try {
//			//직접 쿼리작성 없이 JPA로 조인&셀렉트하고 싶은 경우 아래와 같이 함
////    		List<Cart> cartList = cartService.getCartList(user.getUserId());
////    		ResponseDTO<Cart> response = new ResponseDTO<>();
////    		response.setData(cartList);
////    		return ResponseEntity.ok().body(response);
//    		
//    		//직접 작성한 쿼리로 매퍼 사용하고 싶은 경우 아래와 같이 함
//    		List<Map<String, Object>> cartList = wishService.getWishMapList(user.getUserId());    		
//    		ResponseDTO<Map<String, Object>> response = new ResponseDTO<>();
//    		response.setData(cartList);
//    		return ResponseEntity.ok().body(response);
//    		
//    	}catch(Exception e){
//    		System.out.println(e.getMessage());
//    		ResponseDTO<Cart> response = new ResponseDTO<>();
//    		response.setError(e.getMessage());
//    		return ResponseEntity.badRequest().body(response);		
//    	}
//	}
//
//	
//	
////	@RequestMapping("/getone")
////	@ResponseBody
////	public Product responseBodyTest(@RequestParam Map<String, Object> params, HttpServletRequest request){
////	    String id = params.get("userId").toString();
////	    Integer product = Integer.parseInt(params.get("productId").toString());
////	    Product w = wishService.getall(product);
////		
////	    return w;
////	}
//
////    
////    //위시아이템 삭제 
////    void deleteWishItem(Product product) {}
////    
////    //위시아이템 조회 
////    void getWishItemList(Product product) {}
////    
////    //위시쇼룸 추가 
////    void addWishShowroom(Product product) {}
////    
////    //위시쇼룸 삭제 
////    void deleteWishShowroom(Product product){}
////    
//    //위시쇼룸 조회 
//    //void getWishShowroomList(Product product) {}
//}
