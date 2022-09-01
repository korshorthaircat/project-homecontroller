package com.bootreact.hmct.controller.admin;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ProductDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.service.product.ProductService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
//    @Autowired
//    AdminService adminService;
    
//    @Autowired
//    UserService userService;
	
	@Autowired
	ProductService productService;
//   
//    //회원 정보 조회  
//    @GetMapping("/selectUserList")
//    public ResponseEntity<?> getUserList(@AuthenticationPrincipal String userName){
//    	try {
//    		List<User> userList = userService.getUserList(userName);
//    		
//    		List<UserDTO> userDTOList = new ArrayList<UserDTO>();
//    		
//    		for(User t: userList) {
//    			UserDTO userDTO = new UserDTO();
//    			userDTO.setUserId(t.getUserId());
//    			userDTO.setUserName(t.getUserName());
//    			userDTO.setUserNickname(t.getUserNickname());
//    			userDTO.setUserTel(t.getUserTel());
//    			userDTO.setUserMail(t.getUserMail());
//    			userDTO.setUserRole(t.getUserRole());
//    			userDTO.setUserZip(t.getUserZip());
//    			userDTO.setUserAddr(t.getUserAddr());
//    			userDTO.setUserAddrDetail(t.getUserAddrDetail());
//    			userDTO.setUserPoint(t.getUserPoint());
//    			userDTO.setUserMarketing(t.getUserMarketing());
//    			
//    			userDTOList.add(userDTO);	
//    		}
//    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
//    		
//    		response.setData(userDTOList);
//    		
//    		return ResponseEntity.ok().body(response);
//    		
//    	}catch(Exception e){
//    		System.out.println(e.getMessage());
//    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
//    		response.setError(e.getMessage());
//    		return ResponseEntity.badRequest().body(response);		
//    	}
//    };
//    //회원 삭제
//    @DeleteMapping("/deleteAdminUser")
//    public ResponseEntity<?> deleteUser(@RequestBody User user, String userName){
//    	try {
//    		user.setUserName(userName);
//    		
//    		userService.deleteUser(user);
//    		
//    		List<User> userList = userService.getUserList(userName);
//    		
//    		List<UserDTO> userDTOList = new ArrayList<UserDTO>();
//    		
//    		for(User t: userList) {
//    			UserDTO userDTO = new UserDTO();
//    			userDTO.setUserId(t.getUserId());
//    			userDTO.setUserName(t.getUserName());
//    			userDTO.setUserNickname(t.getUserNickname());
//    			userDTO.setUserTel(t.getUserTel());
//    			userDTO.setUserMail(t.getUserMail());
//    			userDTO.setUserRole(t.getUserRole());
//    			userDTO.setUserZip(t.getUserZip());
//    			userDTO.setUserAddr(t.getUserAddr());
//    			userDTO.setUserAddrDetail(t.getUserAddrDetail());
//    			userDTO.setUserPoint(t.getUserPoint());
//    			userDTO.setUserMarketing(t.getUserMarketing());
//    			
//    			userDTOList.add(userDTO);	
//    		}
//    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
//    		
//    		response.setData(userDTOList);
//    		
//    		return ResponseEntity.ok().body(response);
//    		
//    	}catch(Exception e){
//    		System.out.println(e.getMessage());
//    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
//    		response.setError(e.getMessage());
//    		return ResponseEntity.badRequest().body(response);		
//    	}
//    };
//    
//    
//    //회원정보 수정
//    @PutMapping("/updateAdminUser")
//    public ResponseEntity<?> updateUser(@RequestBody User user, String userName){
//    	try {
//    		user.setUserId(userName);
//    		
//    		userService.deleteUser(user);
//    		
//    		List<User> userList = userService.getUserList(userName);
//    		
//    		List<UserDTO> userDTOList = new ArrayList<UserDTO>();
//    		
//    		for(User t: userList) {
//    			UserDTO userDTO = new UserDTO();
//    			userDTO.setUserId(t.getUserId());
//    			userDTO.setUserName(t.getUserName());
//    			userDTO.setUserNickname(t.getUserNickname());
//    			userDTO.setUserTel(t.getUserTel());
//    			userDTO.setUserMail(t.getUserMail());
//    			userDTO.setUserRole(t.getUserRole());
//    			userDTO.setUserZip(t.getUserZip());
//    			userDTO.setUserAddr(t.getUserAddr());
//    			userDTO.setUserAddrDetail(t.getUserAddrDetail());
//    			userDTO.setUserPoint(t.getUserPoint());
//    			userDTO.setUserMarketing(t.getUserMarketing());
//    			
//    			userDTOList.add(userDTO);	
//    		}
//    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
//    		
//    		response.setData(userDTOList);
//    		
//    		return ResponseEntity.ok().body(response);
//    		
//    	}catch(Exception e){
//    		System.out.println(e.getMessage());
//    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
//    		response.setError(e.getMessage());
//    		return ResponseEntity.badRequest().body(response);		
//    	}
//    };


//
//	
////주문 관리
//
////	주문/배송 수정
//	ResponseEntity<?> updateOrder(Order order) {
//		return null;
//	}
//	ResponseEntity<?> updateDelivery(Delivery delivery) {
//		return null;
//	}
//
////	주문 삭제
//	ResponseEntity<?> deleteOrder(Order order) {
//		return null;
//	}
//
////	주문/배송 조회(리스트/상세)
//	ResponseEntity<?> getOrderList() {
//		return null;
//	}
//	
//	ResponseEntity<?> getDeliveryList() {
//		return null;
//	}
//
//
////상품 관리
//
////	상품 등록
//	ResponseEntity<?> createProduct(Product product) {
//		return null;
//	}
//
////	상품 수정
//	ResponseEntity<?> updateProduct(Product product) {
//		return null;
//	}
//
////	상품 조회(리스트/상세)
    @GetMapping("/admin2")
    public ResponseEntity<?> getProductList(Product product){
    	try {
    		List<Product> productList = productService.getProductList();
    		
    		List<ProductDTO> productDTOList = new ArrayList<ProductDTO>();
    		
    		for(Product t: productList) {
    			ProductDTO productDTO = new ProductDTO();
    			
    			productDTO.setProductNo(t.getProductNo());
    			productDTO.setProductName(t.getProductName());
    			productDTO.setProductState(t.getProductState());
    			productDTO.setProductSize(t.getProductSize());
    			productDTO.setProductRgsde(t.getProductRgsde());
    			productDTO.setProductUpdde(t.getProductUpdde());
    			productDTO.setProductPrice(t.getProductPrice());
    			productDTO.setProductSummary(t.getProductSummary());
    			productDTO.setProductDetail(t.getProductDetail());
    			productDTO.setProductRef(t.getProductRef());
    			productDTO.setProductMng(t.getProductMng());
    			productDTO.setProductSafe(t.getProductSafe());
    			productDTO.setProductDeliveryinfo(t.getProductDeliveryInfo());
    			productDTO.setProductGauge(t.getProductGauge());
    			productDTO.setProductMaterial(t.getProductMaterial());
    			productDTO.setProductCategory(t.getProductCategory());
    			
    			
    			productDTOList.add(productDTO);	
    		}
    		ResponseDTO<ProductDTO> response = new ResponseDTO<>();
    		
    		response.setData(productDTOList);
    		
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<ProductDTO> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
    };
//	
//	ResponseEntity<?> getProduct() {
//		return null;
//	}
}
