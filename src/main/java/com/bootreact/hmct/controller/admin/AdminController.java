package com.bootreact.hmct.controller.admin;

import org.springframework.http.ResponseEntity;

import com.bootreact.hmct.entity.User;

public class AdminController {

//회원 관리 
	//성찬 test

//	회원정보 조회
	ResponseEntity<?> getUserList() {
		return null;
	}
	ResponseEntity<?> getUser(User user) {
		return null;
	}
	
//	회원정보 수정
	ResponseEntity<?> updateUser(User user) {
		return null;
	}

//	회원 삭제
	ResponseEntity<?> deleteUser(User user) {
		return null;
	}

	
//주문 관리

//	주문/배송 수정
	ResponseEntity<?> updateOrder(Order order) {
		return null;
	}
	ResponseEntity<?> updateDelivery(Delivery delivery) {
		return null;
	}

//	주문 삭제
	ResponseEntity<?> deleteOrder(Order order) {
		return null;
	}

//	주문/배송 조회(리스트/상세)
	ResponseEntity<?> getOrderList() {
		return null;
	}
	
	ResponseEntity<?> getDeliveryList() {
		return null;
	}


//상품 관리

//	상품 등록
	ResponseEntity<?> createProduct(Product product) {
		return null;
	}

//	상품 수정
	ResponseEntity<?> updateProduct(Product product) {
		return null;
	}

//	상품 조회(리스트/상세)
	ResponseEntity<?> getProductList() {
		return null;
	}
	
	ResponseEntity<?> getProduct() {
		return null;
	}
}
