package com.bootreact.hmct.controller.review;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.ReviewDTO;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.Review;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.service.product.ProductService;
import com.bootreact.hmct.service.review.ReviewService;


@RestController
@RequestMapping("/api/review")
public class ReviewController {
	@Autowired
	ProductService productService;
	
	@Autowired
	ReviewService reviewService;
	
	//리뷰목록 조회 
	void getReviewList(User user) {}


    //리뷰 생성
//    @PostMapping("/insertReview")
//    public ResponseEntity<?> insertReview(@RequestBody Map<String, String> paramMap) {
//    	
//    	
//    	Product product = new Product();
//    	Review review = new Review();
//    	Order order = new Order();
//    	
//    	review.setReviewNo(Integer.parseInt(paramMap.get("reviewNo")));
//    	
//    	review.setReviewTitle(paramMap.get("reviewTitle"));
//    	review.setReviewRegdate(review.getReviewRegdate());
//    	review.setReviewGrade(paramMap.get("reviewGrade"));
//    	review.setReviewContent(paramMap.get("reviewContent"));
//    	product.setProductNo(Integer.parseInt(paramMap.get("ProductNo")));
//    	order.setOrderNo(Integer.parseInt(paramMap.get("OrderNo")));
//    	
//    	System.out.println(paramMap.get("productNo"));
//    	
//    	//Review review1 = ReviewService.InsertReview(review);
//    	
////    	ReviewDTO reviewDTO = new ReviewDTO();
////    	
////    	reviewDTO.setRevNo(review1.getReviewNo());
////    	reviewDTO.setRevTitle(review1.getReviewTitle());
////    	reviewDTO.setRevRgsde(review1.getReviewRegdate());
////    	reviewDTO.setRevGrade(review1.getReviewGrade());
////    	reviewDTO.setRevContent(review1.getReviewContent());
////    	
//    	//return ResponseEntity.ok().body(reviewDTO);
//    }
	
	//리뷰 수정 
	void updateReview(Review review, User user) {}

	//리뷰 삭제 
	void deleteReview(Review review, User user) {}
	
}
