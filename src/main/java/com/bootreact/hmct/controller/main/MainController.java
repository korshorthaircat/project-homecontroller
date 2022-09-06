package com.bootreact.hmct.controller.main;

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
	@GetMapping("/getProductList")
	public ResponseEntity<?> getProductList() {
		try {
			List<Product> productList = productService.getProductList();
		
			List<ProductDTO> productDTOList = new ArrayList<ProductDTO>();
		
			for(Product p: productList) {
				ProductDTO productDTO = new ProductDTO();
				
				productDTO.setProductNo(p.getProductNo());
				productDTO.setProductName(p.getProductName());
				productDTO.setProductState(p.getProductState());
    			productDTO.setProductSize(p.getProductSize());
    			productDTO.setProductRgsde(p.getProductRgsde());
    			productDTO.setProductUpdde(p.getProductUpdde());
				productDTO.setProductPrice(p.getProductPrice());
				productDTO.setProductSummary(p.getProductSummary());
    			productDTO.setProductDetail(p.getProductDetail());
    			productDTO.setProductRef(p.getProductRef());
    			productDTO.setProductMng(p.getProductMng());
    			productDTO.setProductSafe(p.getProductSafe());
    			productDTO.setProductDeliveryinfo(p.getProductDeliveryInfo());
    			productDTO.setProductGauge(p.getProductGauge());
    			productDTO.setProductMaterial(p.getProductMaterial());
				productDTO.setProductCategory(p.getProductCategory());
				
				productDTOList.add(productDTO);
			}
			ResponseDTO<ProductDTO> response = new ResponseDTO<>();
			
			response.setData(productDTOList);
			
			return ResponseEntity.ok().body(response);
			
		} catch(Exception e) {
			System.out.println(e.getMessage());
			ResponseDTO<ProductDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	};
//
//	//기획전 - 구체적 아이템(카테고리2)
//
//	//쇼룸 - 컬러칩 보여주는 쇼룸
}
