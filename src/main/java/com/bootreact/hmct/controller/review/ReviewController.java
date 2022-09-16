package com.bootreact.hmct.controller.review;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    @PostMapping("/insertReview")
    public String insertReview(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
    	 
    	User user = new User();
    	user.setUserId(userId);
    	
    	reviewService.InsertReview(paramMap);
    	
    	return "regist success";
    }
	
	//리뷰 수정 
	void updateReview(Review review, User user) {}

	//리뷰 삭제 
	void deleteReview(Review review, User user) {}
	
}
