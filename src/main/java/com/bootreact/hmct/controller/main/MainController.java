package com.bootreact.hmct.controller.main;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ProductDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.service.product.ProductService;


@RestController
@RequestMapping("/api/main")
public class MainController {
	
	@Autowired
	ProductService productService;
	
//	//헤더의 검색바 관련 메서드
//	void getSearchProducts(String keyword) {}
//
//	//기획전 - 쇼룸
//	ResponseEntity<?> getShowroomList(String code) {
//		return null;
//	}
//
//	//기획전 - 구체적 아이템(카테고리1)
	@GetMapping("/getMainProductList")
	public Map<String, Object> getMainProductList() {
		try {
			List<Map<String, Object>> productList = productService.getMainProductList();
			List<Map<String, Object>> productImageList = productService.getMainProductImageList();
			
			Map<String, Object> returnMap = new HashMap<String, Object>();
			
			returnMap.put("productList", productList);
			returnMap.put("productImageList", productImageList);
			
			return returnMap;
			
		} catch(Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	};
//
//	//기획전 - 구체적 아이템(카테고리2)
//
//	//쇼룸 - 컬러칩 보여주는 쇼룸
}
