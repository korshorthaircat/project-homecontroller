package com.bootreact.hmct.controller.admin;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.dto.UserDTO;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.service.user.UserService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
//    @Autowired
//    AdminService adminService;
    
//    @Autowired
//    UserService userService;
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
//	ResponseEntity<?> getProductList() {
//		return null;
//	}
//	
//	ResponseEntity<?> getProduct() {
//		return null;
//	}
}
