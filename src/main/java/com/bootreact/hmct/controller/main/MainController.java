package com.bootreact.hmct.controller.main;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.showroom.ShowroomService;


@RestController
@RequestMapping("/api/main")
public class MainController {

	//develop2 첫커밋
	//develop2 2트 첫커밋
	@Autowired
	ProductService productService;
	
	@Autowired
	ShowroomService showroomService;
	
	
	//헤더의 검색바 관련 메서드
	@GetMapping("/getSearchProducts")
	public Map<String, Object> getSearchProducts(@RequestParam String word) {
		System.out.println("검색바에서 다음과 같이 검색: "+word);
		try {
			List<Map<String, Object>> searchProductList = productService.getSearchProducts(word);
			
			Map<String, Object> returnMap = new HashMap<String, Object>();
			
			returnMap.put("searchProductList", searchProductList);
			
			int[] productNoArr = new int[searchProductList.size()];
			
			for(int i = 0; i < searchProductList.size(); i++) {
				productNoArr[i] = Integer.parseInt(searchProductList.get(i).get("productNo").toString());
			}
			
			List<Map<String, Object>> searchProductImageList = productService.getSearchProductImageList(productNoArr);
			
			returnMap.put("searchProductImageList", searchProductImageList);
			
			return returnMap;
			
		} catch (Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	};
	
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
	@GetMapping("/getShowroomList")
	public Map<String, Object> getShowroomList() {
		try {
			Map<String, Object> resultMap = new HashMap<String, Object>();
			
			List<Showroom> showroomList = showroomService.getShowroomList();
			
			List<Map<String, Object>> showroomItemList = showroomService.getShowroomItemList();
			
			resultMap.put("showroomList", showroomList);
			resultMap.put("showroomItemList", showroomItemList);
			
			return resultMap;
			
		} catch(Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			
			errorMap.put("error", e.getMessage());
			
			return errorMap;
		}
	};
	
	//선택된 색상의 쇼룸 표출
	@GetMapping("/getColorShowroomList")
	public Map<String, Object> getColorShowroomList(@RequestParam String showroomColor) {
		try {
			Map<String, Object> resultMap = new HashMap<String, Object>();
			
			List<Showroom> colorShowroomList = showroomService.getColorShowroomList(showroomColor);
			
			List<Map<String, Object>> colorShowroomItemList = new ArrayList<Map<String, Object>>();
			
			for(Showroom s : colorShowroomList) {
				List<Map<String, Object>> temp = showroomService.getColorShowroomItemList(s.getShowroomNo());
				colorShowroomItemList.addAll(temp);
			}
			
			resultMap.put("colorShowroomList", colorShowroomList);
			resultMap.put("colorShowroomItemList", colorShowroomItemList);
			
			return resultMap;
			
		} catch(Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			
			errorMap.put("error", e.getMessage());
			
			return errorMap;
		}
	};
}
