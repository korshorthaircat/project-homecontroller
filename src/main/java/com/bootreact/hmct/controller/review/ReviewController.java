package com.bootreact.hmct.controller.review;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.InquiryDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.dto.ReviewDTO;
import com.bootreact.hmct.entity.Review;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.review.ReviewService;


@RestController
@RequestMapping("/api/review")
public class ReviewController {
	private static final Review[] ReviewList = null;

	@Autowired
	ProductService productService;
	
	@Autowired
	ReviewService reviewService;
	
//	문의글 생성
//	@PostMapping("/insertReview")
//	public ResponseEntity<?> insertReview(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
//		try {
//			int reviewNo = 1;
//			
//			//문의글 추가 처리하기
//			reviewService.addReview(reviewNo,
//									userId,
//									paramMap.get("commonCode"),
//									paramMap.get("productNo"),
//									paramMap.get("reviewContent"),
//								    paramMap.get("reviewTitle"),
//									paramMap.get("reviewGrade"));
//			
//			//게시글 목록 받아오기
//			List<Review> ReviewList = reviewService.getReviewList();
//			List<ReviewDTO> reviewDTOList = new ArrayList<ReviewDTO>();
// 		
//			for(Review r : ReviewList) {
//				ReviewDTO reviewDTO = new ReviewDTO();
//				reviewDTO.setReviewNo(r.getReviewNo());
//				reviewDTO.setCommonCode(r.getCommonCode());
//				reviewDTO.setReviewTitle(r.getReviewTitle());
//				reviewDTO.setReviewRegdate(r.getReviewRegdate());
//				reviewDTO.setReviewGrade(r.getReviewGrade());
//				reviewDTO.setReviewContent(r.getReviewContent());
//				reviewDTO.setProductNo(r.getProductNo());
//				reviewDTO.setUser(r.getUser());
//				
//				
//				reviewDTOList.add(reviewDTO);
//			}
//		ResponseDTO<ReviewDTO> response = new ResponseDTO<>();
//		
//		response.setData(reviewDTOList);
//		
//		return ResponseEntity.ok().body(response);
//		
//		}catch(Exception e){
//			System.out.println(e.getMessage());
//			ResponseDTO<ReviewDTO> response = new ResponseDTO<>();
//			response.setError(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//}
//	
//	문의글 목록 조회
//	@PostMapping("/getReviewList")
//	public ResponseEntity<?> getReviewList() {
//		try {
//			List<Review> reivewList = reviewService.getReviewList();
//			
//			List<ReviewDTO> reviewDTOList = new ArrayList<ReviewDTO>();
// 		
//			for(Review r : ReviewList) {
//				ReviewDTO reviewDTO = new ReviewDTO();
//				
//				ReviewDTO reviewDTO1 = new ReviewDTO();
//				reviewDTO1.setReviewNo(r.getReviewNo());
//				reviewDTO1.setReviewTitle(r.getReviewTitle());
//				reviewDTO1.setReviewRegdate(r.getReviewRegdate());
//				reviewDTO1.setReviewGrade(r.getReviewGrade());
//				reviewDTO1.setReviewContent(r.getReviewContent());
//				reviewDTO.setProductNo(r.getProductNo());
//				reviewDTO1.setUser(r.getUser());
//				
//				
//				reviewDTOList.add(reviewDTO1);
//			}
//		ResponseDTO<ReviewDTO> response = new ResponseDTO<>();
//		
//		response.setData(reviewDTOList);
//		
//		return ResponseEntity.ok().body(response);
//		
//		}catch(Exception e) {
//			System.out.println(e.getMessage());
//			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
//			response.setError(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//	}
//
//
////	문의글 수정
//	@PostMapping("/updateReview")
//	public ResponseEntity<?> updateReview(@RequestBody Map<String, String> paramMap) {
//		try {
//			
//			
//			//게시글 목록 받아오기
//			List<Review> reviewList = reviewService.getReviewList();
//			List<ReviewDTO> reviewDTOList = new ArrayList<ReviewDTO>();
// 		
//			for(Review r : reviewList) {
//				
//				ReviewDTO reviewDTO = new ReviewDTO();
//				reviewDTO.setReviewNo(r.getReviewNo());
//				reviewDTO.setReviewTitle(r.getReviewTitle());
//				reviewDTO.setReviewRegdate(r.getReviewRegdate());
//				reviewDTO.setReviewGrade(r.getReviewGrade());
//				reviewDTO.setReviewContent(r.getReviewContent());
//				reviewDTO.setProductNo(r.getProductNo());
//				reviewDTO.setUser(r.getUser());
//				
//				reviewDTOList.add(reviewDTO);
//			}
//		ResponseDTO<ReviewDTO> response = new ResponseDTO<>();
//		
//		response.setData(reviewDTOList);
//		
//		return ResponseEntity.ok().body(response);
//		
//		}catch(Exception e){
//			System.out.println(e.getMessage());
//			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
//			response.setError(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//}
//
//
////	문의글 삭제
//	@DeleteMapping("/deleteReview")
//	public ResponseEntity<?> deleteReview(@RequestBody Map<String, String> paramMap) {
//		try {
//			//문의글 삭제 처리하기
//			reviewService.deleteReview(Integer.parseInt(paramMap.get("reviewNo")));
//			
//			//게시글 목록 받아오기
//			List<Review> reviewList = reviewService.getReviewList();
//			List<ReviewDTO> reviewDTOList = new ArrayList<ReviewDTO>();
// 		
//			for(Review r : reviewList) {
//				ReviewDTO reviewDTO = new ReviewDTO();
//				reviewDTO.setReviewNo(r.getReviewNo());
//				reviewDTO.setReviewTitle(r.getReviewTitle());
//				reviewDTO.setReviewRegdate(r.getReviewRegdate());
//				reviewDTO.setReviewGrade(r.getReviewGrade());
//				reviewDTO.setReviewContent(r.getReviewContent());
//				reviewDTO.setProductNo((int) r.getProductNo());
//				
//				reviewDTOList.add(reviewDTO);
//			}
//		ResponseDTO<ReviewDTO> response = new ResponseDTO<>();
//		
//		response.setData(reviewDTOList);
//		
//		return ResponseEntity.ok().body(response);
//		
//		}catch(Exception e){
//			System.out.println(e.getMessage());
//			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
//			response.setError(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//	}
//	
}
