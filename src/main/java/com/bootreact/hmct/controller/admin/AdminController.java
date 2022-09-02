package com.bootreact.hmct.controller.admin;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
//    @GetMapping("/admin3")
//    public String edit(@PathVariable("productNo") Long id, Model model) {
//        ProductDTO productDTO = productService.findByproductNo(id);
//        model.addAttribute("post", productDTO);
//       // return ResponseEntity.badRequest().body(response);		
//    }

    @PutMapping("/admin3/{productNo}")
    public ResponseEntity<?> updateProduct(@RequestBody Product product, @AuthenticationPrincipal int productNo){
    	try {
			product.setProductNo(productNo);
			//DB에 id값으로 해당 product 수정
			productService.updateProduct(product);
			
			//새로 저장된 내용까지 가져오는 productList
			List<Product> productList = productService.getProductList();
			
			List<ProductDTO> productDTOList = new ArrayList<ProductDTO>();
			
			for(Product t : productList) {
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
		} catch(Exception e) {
			ResponseDTO<ProductDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
//
////	상품 조회(리스트/상세)
    @GetMapping("/admin2")
    public ResponseEntity<?> getProductList(){
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

    
    //상품수정
    @GetMapping("/admin3/{productNo}")
	ResponseEntity<?> getProduct(@RequestBody Product product) {
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
}
