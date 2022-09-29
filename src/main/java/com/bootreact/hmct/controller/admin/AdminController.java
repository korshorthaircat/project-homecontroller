package com.bootreact.hmct.controller.admin;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
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
import com.bootreact.hmct.entity.Common;
import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductImage;
import com.bootreact.hmct.entity.ProductOption;
import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.showroom.ShowroomService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

   @Autowired
   ProductService productService;
   
   @Autowired
   private ShowroomService showroomService;   

//   상품 조회(리스트)
    @GetMapping("/admin2")
    public ResponseEntity<?> getMainProductList() {
      try {
         List<Map<String, Object>> productList = productService.getAdminProductList();
      
         
         ResponseDTO<Map<String, Object>> response = new ResponseDTO<>();
         
         response.setData(productList);
         
         return ResponseEntity.ok().body(response);
         
      } catch(Exception e) {
         System.out.println(e.getMessage());
         ResponseDTO<ProductDTO> response = new ResponseDTO<>();
         response.setError(e.getMessage());
         return ResponseEntity.badRequest().body(response);
      }
   };
    
   
   //상품 조회(상세)
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
    
    //상품 수정
    @PutMapping("/admin3")
   ResponseEntity<?> updateProduct(@RequestBody Product product) {
      try {
         Product product1 = productService.findbyProductNo(product.getProductNo());
         
         product.setProductNo(product1.getProductNo());
         productService.updateProduct(product);
         //productService.updateProductOption();
         
         
         
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
    
    //상품 옵션(커먼코드, 재고량, 이미지파일) 추가
	@PostMapping(value = "/addOption", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
	public String addOption(MultipartHttpServletRequest mphsRequest, 
									  Product product, 
									  HttpServletRequest request, 
									  ProductOption productOption, 
									  Common common) throws IllegalStateException, IOException {
	
//			System.out.println(product.getProductNo());
//			System.out.println(common.getCommonCode());
//			System.out.println(productOption.getProductInventory());
			
			productOption.setCommon(common);
			productOption.setProduct(product);
			
			//옵션추가 처리하기
			productService.addOption(product.getProductNo(),
								   	 common.getCommonCode(),
								   	 productOption.getProductInventory());

			//이미지 등록하기 
			/*파일 서버에 업로드 시작*/
			List<ProductImage> fileList = new ArrayList<ProductImage>();
			
			//서버의 루트 경로 가져오기
			String rootPath = request.getSession().getServletContext().getRealPath("/");
			String attachPath = "/upload/";
			File directory = new File(rootPath + attachPath);
			
			if(directory.exists() == false) {
				//서버 루트 경로에 upload 폴더 만들기 
				directory.mkdir();
			}
			
			//첨부파일 목록 꺼내오기 
			Iterator<String> iterator = mphsRequest.getFileNames(); 
			
			while(iterator.hasNext()) {
				//iterator에 담겨있는 파일이름들로 첨부파일 꺼내오기 
				List<MultipartFile> list = mphsRequest.getFiles(iterator.next());
				
				for(MultipartFile multipartFile : list) {
					if(!multipartFile.isEmpty()) {
						ProductImage productImage = new ProductImage();
						productImage.setProductOption(productOption);
						
						//고유 파일명 생성 
						//실제 서버에 저장되는 파일명
						String uuid = UUID.randomUUID().toString();
						productImage.setProductImageName(uuid + multipartFile.getOriginalFilename());
						productImage.setProductImagePath(rootPath + attachPath);
						
						fileList.add(productImage);
						
						//파일 업로드 처리 
						File file = new File(rootPath + attachPath + uuid + multipartFile.getOriginalFilename());
						multipartFile.transferTo(file);
					}
				}
			}
			/*파일 서버에 업로드 끝*/
		
			productService.insertProductFiles(fileList);
		
			return "OK";
	}
    
    
    //인테리어 쇼룸 등록

    @PostMapping(value= "/insertShowroom",consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
    public void insertShowroom(HttpServletRequest request,MultipartHttpServletRequest mphsRequest, @RequestParam Map<String, Object> paramMap) throws IOException, ParseException {
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
    	//파라미터로 받은 맵에서 밸류들 꺼내서 Showroom 객체에 담아주기
    	
    	JSONParser parser = new JSONParser();      
    	
    	JSONArray jsonArray = (JSONArray) parser.parse(paramMap.get("itemList").toString());
    	
    	List<Map<String, Object>> itemList = new ArrayList<Map<String, Object>>();

		if (jsonArray != null) {

			int jsonSize = jsonArray.size();

			for (int i = 0; i < jsonSize; i++) {
				JSONObject jObj = (JSONObject)jsonArray.get(i);

				Map<String, Object> map = new ObjectMapper().readValue(jObj.toJSONString(), Map.class);
				
				itemList.add(map);
			}
		}
    	
    	Showroom showroom = new Showroom();
    	showroom.setShowroomColor(paramMap.get("showroomColor").toString());
    	
    	//등록할 쇼룸 번호 가져오기
    	int srNo = showroomService.getNextShowroomNo();
    	showroom.setShowroomNo(srNo);
    	
    	System.out.println(paramMap.toString());
    	
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
					
					//sr.setShowroomNo(srNo);
					
					//showroomImage.setShowroomImgName(sr);
					
					//고유 파일명 생성 
					//실제 서버에 저장되는 파일명
					String uuid = UUID.randomUUID().toString();
					//등록할 쇼룸 이미지 파일명 담아주기
					showroom.setShowroomImgName(uuid + multipartFile.getOriginalFilename());
					
					//파일 업로드 처리 
					File file = new File(rootPath + attachPath + uuid + multipartFile.getOriginalFilename());
					
					multipartFile.transferTo(file);
				}		
			}
    	}
    	//쇼룸 등록 시작
    	showroomService.insertShowroom(showroom);
    	
    	//쇼룸 아이템 등록
    	showroomService.insertShowroomItems(itemList, srNo);
    }
  
    
    //상품삭제
    @DeleteMapping("/deleteProduct")
    public ResponseEntity<?> deleteProduct(@RequestBody Map<String, Object> paramMap) {
        try {
          
           productService.deleteProduct(paramMap);
        	
           List<Map<String, Object>> productList = productService.getAdminProductList();
        
           
           ResponseDTO<Map<String, Object>> response = new ResponseDTO<>();
           
           response.setData(productList);
           return ResponseEntity.ok().body(response);
           
        } catch(Exception e) {
           System.out.println(e.getMessage());
           ResponseDTO<ProductDTO> response = new ResponseDTO<>();
           response.setError(e.getMessage());
           return ResponseEntity.badRequest().body(response);
        }
     };
     
     @GetMapping("/test")
     public String test() {
    	 return "OK";
     }
}