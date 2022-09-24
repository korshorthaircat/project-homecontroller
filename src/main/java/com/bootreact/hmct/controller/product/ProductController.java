package com.bootreact.hmct.controller.product;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bootreact.hmct.dto.ProductDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.dto.ShowroomDTO;
import com.bootreact.hmct.entity.Common;
import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductImage;
import com.bootreact.hmct.entity.ProductOption;
import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.showroom.ShowroomService;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	ShowroomService showroomService;
	
	//제품등록하기
	@PostMapping(value = "/insertProduct", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
	public void insertProduct(MultipartHttpServletRequest mphsRequest, Product product, 
			HttpServletRequest request, ProductOption productOption, Common common) throws IllegalStateException, IOException {
		/*상품정보 등록 시작*/
		int prNo = productService.insertProduct(product);
		/*상품정보 등록 끝*/
		
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
					ProductOption prOpt = new ProductOption();
				
					prOpt.setProduct(product);
					prOpt.setCommon(common);
					
					productImage.setProductOption(prOpt);
					
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
		
		/*색상 및 수량 등록 시작*/ 
		productOption.setProduct(product);
		productOption.setCommon(common);
		System.out.println(productOption.toString());
		productService.insertProductOption(productOption);
		/*색상 및 수량 등록 끝*/
		
		/*업로드 파일정보 저장 시작*/
		productService.insertProductFiles(fileList);
		/*업로드 파일정보 저장 끝*/
	}

	//제품조회(상세정보) - 색상별 사진 1개씩 가져오기
	@GetMapping("/productColorDetail")
	public Map<String, Object> getRepresentativeImage(@RequestParam int productNo) {
		try {	
			
			List<Map<String, Object>> productInfo = productService.getProduct(productNo);
			List<Map<String, Object>> productImage = productService.getProductImage(productNo);
			
			Map<String, Object> returnMap = new HashMap<String, Object>();
			
			List<Map<String, Object>> productImage1 = productService.getRepresentativeImage(productNo);
			
	

			returnMap.put("productInfo", productInfo);
			returnMap.put("productImage", productImage1);
			
			return returnMap; 
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
    		errorMap.put("error", e.getMessage());
    		return errorMap;
    	}
	}
	
	
	
	// 제품 조회(상세정보) - 제품번호만 넘겨서 조회하기
		@GetMapping("/productDetail")
		public Map<String, Object> getProduct(@RequestParam int productNo, @AuthenticationPrincipal String userId ) {
			try {	
//				System.out.println(userId);
				List<Map<String, Object>> productInfo = productService.getProduct(productNo);

				//제품번호를 이용해서 대표컬러(커먼코드) 1개 가져오기
				String commonCode = productService.getRepresentativeCommonCode(productNo);

				//제품번호와 커먼코드를 맵에 담기
				Map<String, Object> paramMap = new HashMap<String, Object>();
				paramMap.put("productNo", productNo);
				paramMap.put("commonCode", commonCode);

				//제품번호, 커먼코드를 맵에 담아 보내서 이미지 받아오기
				List<Map<String, Object>> productImage1 = productService.getProductWithCommonCode(paramMap);
				
				//로그인된 유저가 해당 제품을 구매한 횟수 가져오기
				int orderHistory = productService.getOrderHistory(productNo, userId);

				//유저가 해당 제품을 구매했을 떄의 주문번호를 리스트로 받아오기(단, 이미 리뷰 작성한 경우는 제외)
				List<Integer> orderNoList = productService.getOrderNoListByProductNo(productNo, userId);
				
				//유저가 해당 제품을 구매했을 때의 제품옵션(커먼코드)를 리스트로 받아오기(단, 이미 리뷰 작성한 경우는 제외)
				List<String> commonCodeList = productService.getCommonCodeListByProductNo(productNo, userId);
				
				Map<String, Object> returnMap = new HashMap<String, Object>();
				returnMap.put("productInfo", productInfo);
				returnMap.put("productImage", productImage1);
				returnMap.put("orderHistory", orderHistory);
				returnMap.put("orderNoList", orderNoList);
				returnMap.put("commonCodeList", commonCodeList);
				
				return returnMap; 
	    	}catch(Exception e){
	    		Map<String, Object> errorMap = new HashMap<String, Object>();
	    		errorMap.put("error", e.getMessage());
	    		return errorMap;
	    	}
		}  
		//제품 조회(상세정보) - 제품번호, 커먼코드를 넘겨서 조회하기
		@PostMapping("/changeProductColor")
		public Map<String, Object> getProductWithCommonCode(@RequestBody Map<String, Object> paramMap) {
//			  리액트단에서 데이터 보낼 때(axios 요청) 아래와 같이 해야 함
//			  method: "post",
//		      params: { productNo: productNo,
//						commonCode: commonCode },
			try {	

				System.out.println(paramMap);
				
				List<Map<String, Object>> productInfo = productService.getProduct(
						Integer.parseInt(paramMap.get("productNo").toString())
						);
				List<Map<String, Object>> productImage = productService.getProductWithCommonCode(paramMap);
				
				Map<String, Object> returnMap = new HashMap<String, Object>();
				
				returnMap.put("productInfo", productInfo);
				returnMap.put("productImage", productImage);
				
				return returnMap; 
	    	}catch(Exception e){
	    		Map<String, Object> errorMap = new HashMap<String, Object>();
	    		errorMap.put("error", e.getMessage());
	    		return errorMap;
	    	}
		}


	
//	//상품평 클릭 시 상품평 네브바로 불러오기 
//	ResponseEntity<?>  getReviewList() {
//		return null;
//	}
//
//	//비슷한제품추천 불러오기(카테고리별로 / 제품명,가격 )
//	ResponseEntity<?> getProductList(String code) {
//		return null;
//	}
//
//	
//	//인테리어 쇼룸 - 호버시 제품 상세정보 불러오기 
		@GetMapping("/getShowroomProductItem")
		public Map<String, Object> getShowroomProductItem(@RequestBody Map<String, String> paramMap) {
			try {
				
				System.out.println("안녕하세요~!~~~~~~~~~~~~~~~~~~~~~~~~~");
				System.out.println("//////////////////////////////////" + paramMap);
				
				List<Map<String, Object>> showroomProductItem =  showroomService.getShowroomProductItem(
						Integer.parseInt(paramMap.get("productNo"))
						);
				
				Map<String, Object> returnMap = new HashMap<String, Object>();
				
				returnMap.put("showroomProductItem", showroomProductItem);
				
				return returnMap;
			} catch(Exception e) {
				Map<String, Object> errorMap = new HashMap<String, Object>();
				errorMap.put("error", e.getMessage());
				return errorMap;
				
			}
		}
		
		
	//색상 선택시 해당 색상 인테리어 쇼룸 이미지 조회(더보기 클릭시 추가)
	@GetMapping("/getShowroomList")
	public ResponseEntity<?> getShowroomList() {
		try {
			List<Showroom> showroomList = showroomService.getShowroomList();
			
			List<ShowroomDTO> showroomDTOList = new ArrayList<ShowroomDTO>();
	
			for(Showroom s: showroomList) {
				ShowroomDTO showroomDTO = new ShowroomDTO();
				
				showroomDTO.setShowroomNo(s.getShowroomNo());
				showroomDTO.setShowroomColor(s.getShowroomColor());
				showroomDTO.setShowroomImgName(s.getShowroomImgName());
				showroomDTO.setShowroomImgOriginalName(s.getShowroomImgOriginalName());
				
				showroomDTOList.add(showroomDTO);				
			}
			ResponseDTO<ShowroomDTO> response = new ResponseDTO<>();
			
			response.setData(showroomDTOList);
			
			return ResponseEntity.ok().body(response);
			
			}catch(Exception e) {
				System.out.println(e.getMessage());
				ResponseDTO<ProductDTO> response = new ResponseDTO<> ();
				response.setError(e.getMessage());
				return ResponseEntity.badRequest().body(response);
			}
	};
	
	//<리스트 페이지> 전제 제품 조회 (컬러별 중복 노출)
	@GetMapping("/getAllProductList")
	public Map<String, Object> getAllProductList() {
		try {
			System.out.println(".///////////////////////");
			List<Map<String, Object>> productList = productService.getAllProductList();
			List<Map<String, Object>> productImageList = productService.getAllProductImageList();
			
			System.out.println(productList.toString());
			System.out.println(productImageList.toString());
			
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
	
	//<리스트 페이지> 카테고리/컬러/소재/가격별 제품목록 조회 (동적 쿼리 사용)
	@PostMapping("/getProductListByFilter")
	public Map<String, Object> getProductListByFilter(@RequestBody Map<String, String> paramMap) {
//		  리액트단에서 데이터 보낼 때(axios 요청) 아래와 같이 해야 함
//		  method: "post",
//	      params: { productCategory: productCategory,
//					commonCode: commonCode,
//					producctMaterial: productMaterial,
//					lowestPrice: lowestPrice,
//					highestPrice: highestPrice},
		try {
			System.out.println(paramMap.toString());
			
			List<Map<String, Object>> productList = productService.getProductListByFilter(paramMap);
			List<Map<String, Object>> productImageList = productService.getProductImageListByFilter(paramMap);
			
			Map<String, Object> returnMap = new HashMap<String, Object>();
			
			returnMap.put("productList", productList);
			returnMap.put("productImageList", productImageList);
			
			return returnMap; 
			
		} catch(Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}
	
	
	
	//네브바 클릭시 제품 카테고리별로 가져오기 
	@GetMapping("/getProductCategoryList")
	public Map<String, Object> getProductCategoryList(@RequestParam String code) {
			System.out.println("code: ///////" + code);
			
			try {
				List<Map<String, Object>> getCategoryList = productService.getProductCategoryList(code);
				
				Map<String, Object> returnMap = new HashMap<String, Object>();
				
				returnMap.put("getCategoryList", getCategoryList);
				
				int[] productNoArr = new int[getCategoryList.size()];
				
				for(int i=0; i< getCategoryList.size();i++) {
					productNoArr[i] = Integer.parseInt(getCategoryList.get(i).get("productNo").toString());
				}
				
				List<Map<String, Object>> searchProductImageList = productService.getSearchProductImageList(productNoArr);
				returnMap.put("searchProductImageList", searchProductImageList);
				
				return returnMap;
			}catch (Exception e) {
				Map<String, Object> errorMap = new HashMap<String, Object>();
				errorMap.put("error", e.getMessage());
				return errorMap;
			}
		}	
	};
	

