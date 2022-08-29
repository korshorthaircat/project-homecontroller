package com.bootreact.hmct.controller.product;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductImage;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	//@Autowired
	//ProductService productService;
	
	//제품등록하기
	@PostMapping(value = "/insertProduct", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
	public void product(MultipartHttpServletRequest mphsRequest,
			Product product, HttpServletRequest request) throws IllegalStateException, IOException {
		
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
					
					productImage.setProduct(product);
					
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
	}

//	//제품상세
//
//	//상세페이지에 제품정보 불러오기
//	ResponseEntity<?> getProductInfo(Product product) {
//		return null;
//	}
//
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
//	//하트 클릭 시 위시리스트 추가
//	
//
//	//하트 재클릭 시 위시리스트 삭제 
//	
//
//	//색상 선택 → 수량 선택 → 구매하기 버튼 클릭 시 장바구니에 추가 
//	
//
//	
//	//제품목록
//
//	//카테고리 선택시 해당 제품만 나오게 필터(색상, 소재, 카테고리 별)
//	
//
//	// 더보기 클릭시 사진 추가 
//	
//
//	//장바구니 클릭시 장바구니 추가
//	
//
//	//하트 클릭 시 위시리스트 추가
//	
//
//	//하트 재클릭 시 위시리스트 삭제
//	
//
//	//필터 카테고리 세부사항 - 세부사항 조정 및 클릭시 그에 해당하는 제품들 출력 
//	
//
//	
//	//인테리어 쇼룸
//
//	//색상 선택시 해당 색상 인테리어 쇼룸 이미지 조회(더보기 클릭시 추가)
//	ResponseEntity<?> getShowroomList(String code) {
//		return null;
//	}
//
//	// 하트 클릭 시 온라인쇼룸 위시리스트 추가
//	ResponseEntity<?> addWishShowroom(Product product) {
//		return null;
//	}
	
}
