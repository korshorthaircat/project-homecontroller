package com.bootreact.hmct.service.review;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Review;

@Service
public interface ReviewService {
	
	List<Review> getReviewList();

	void addReview(String userId, 
				   String commonCode, 
				   int productNo, 
				   int orderNo, 
				   int reviewGrade, 
				   String reviewContent,
				   String reviewTitle);

	void updateReview(int reviewNo);

	void deleteReview(int reviewNo);

	


	
	

}
