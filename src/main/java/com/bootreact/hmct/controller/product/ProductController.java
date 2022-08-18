package com.bootreact.hmct.controller.product;

import org.springframework.http.ResponseEntity;

public class ProductController {

	//제품상세

	//상세페이지에 제품정보 불러오기
	ResponseEntity<?> getProductInfo(Product product) {
		return null;
	}

	//상품평 클릭 시 상품평 네브바로 불러오기 
	ResponseEntity<?>  getReviewList() {
		return null;
	}

	//비슷한제품추천 불러오기(카테고리별로 / 제품명,가격 )
	ResponseEntity<?> getProductList(String code) {
		return null;
	}

	//하트 클릭 시 위시리스트 추가
	

	//하트 재클릭 시 위시리스트 삭제 
	

	//색상 선택 → 수량 선택 → 구매하기 버튼 클릭 시 장바구니에 추가 
	

	
	//제품목록

	//카테고리 선택시 해당 제품만 나오게 필터(색상, 소재, 카테고리 별)
	

	// 더보기 클릭시 사진 추가 
	

	//장바구니 클릭시 장바구니 추가
	

	//하트 클릭 시 위시리스트 추가
	

	//하트 재클릭 시 위시리스트 삭제
	

	//필터 카테고리 세부사항 - 세부사항 조정 및 클릭시 그에 해당하는 제품들 출력 
	

	
	//인테리어 쇼룸

	//색상 선택시 해당 색상 인테리어 쇼룸 이미지 조회(더보기 클릭시 추가)
	ResponseEntity<?> getShowroomList(String code) {
		return null;
	}

	// 하트 클릭 시 온라인쇼룸 위시리스트 추가
	ResponseEntity<?> addWishShowroom(Product product) {
		return null;
	}
	
}
