package com.bootreact.hmct.controller.admin;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bootreact.hmct.dto.ProductDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.entity.ShowroomItem;
import com.bootreact.hmct.entity.ShowroomItemId;
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

   
//
////	상품 조회(리스트)
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
    }
    
//	상품 조회(상세)
    @PostMapping("/admin3")
    public ResponseEntity<?> getProduct(@RequestBody Product product) {
    	try {
    		Product prod = productService.findbyProductNo(product.getProductNo());
    		  	
    		List<Product> productList = new ArrayList<Product>();
    		productList.add(prod);
    		
    		ResponseDTO<Product> response = new ResponseDTO<>(); 
    		response.setData(productList);
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<Product> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
    }
    
    //상품수정
    @PutMapping("/admin3")
	ResponseEntity<?> updateProduct(@RequestBody Product product) {
		try {
			Product product1 = productService.findbyProductNo(product.getProductNo());
			
			product.setProductNo(product1.getProductNo());
			productService.updateProduct(product);
			
			
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

    }
    
    
    //인테리어 쇼룸 등록
    @PostMapping(value= "/insertshowroom",consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
    public void insertShowroom(HttpServletRequest request,MultipartHttpServletRequest mphsRequest, ShowroomItem showroomItem,
    		@RequestParam Map<String, String> paramMap, ShowroomItemId showroomItemId, Showroom showroom) throws IOException {
    	//paramMap 형태
    	/*
    	 * {
    	 * 		"showroomImgOriginalName": "ㅁㅁㅁ.jpg",
    	 * 		"showroomColor": "red",
    	 * 		"productName1": "232"
    	 * 
    	 * }
    	 * Showroom showroom = new Showroom();
    	 * showroom.setshowroomColor(paramMap.get("showroomColor"));
    	 * 
    	 * List<ShowroomItem> showroomItemList = new ArrayList<ShowroomItem>();
    	 * ShowroomItem show
    	 * */

    	//쇼룸 등록 시작
    	int srNo = productService.insertShowroom(showroom);
    	
    	//파일 서버에 업로드 시작
    	List<Showroom> showroomFileList = new ArrayList<Showroom>();
    	
    	//서버의 루트 경로 가져오기
    	String rootPath = request.getSession().getServletContext().getRealPath("/");
		
		String attachPath = "/upload/";
    	
    	File directory = new File(rootPath + attachPath);
    	
    	if(directory.exists() == false) {
    		directory.mkdir();
    	}
    	
    	//첨부파일 목록 꺼내오기 
    	Iterator<String> iterator = mphsRequest.getFileNames();
    	
    	while(iterator.hasNext()) {
    		List<MultipartFile> list = mphsRequest.getFiles(iterator.next());
			
			for(MultipartFile multipartFile : list) {
				if(!multipartFile.isEmpty()) {
					Showroom showroomImage = new Showroom();
					Showroom sr = new Showroom();
					sr.setShowroomNo(srNo);
					
					showroomImage.setShowroomImgName(sr);
					
					//고유 파일명 생성 
					//실제 서버에 저장되는 파일명
					String uuid = UUID.randomUUID().toString();
					showroomImage.setShowroomImgName(uuid + multipartFile.getOriginalFilename());
					
					showroomImage.setShowroomImgName(rootPath + attachPath);
					
					showroomFileList.add(showroomImage);
					
					//파일 업로드 처리 
					File file = new File(rootPath + attachPath + uuid + multipartFile.getOriginalFilename());
					
					multipartFile.transferTo(file);
				}		
			}
    	}
    	productService.insertShowroomFiles(showroomFileList);
    	
    }
    
    
    //인테리어 쇼룸 수정
    
    
    
    //인테리어 쇼룸 삭제
   
    
    
    //상품삭제
    @DeleteMapping("/deleteProduct")
    public ResponseEntity<?> deleteProduct(@RequestBody Product product){
    	try {

    		productService.deleteProduct(product);
    		
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
