package com.bootreact.hmct.service.review;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Review;

@Service
public interface ReviewService {
	
	List<Review> getReviewList();

	void addReview(int reviewNo, String userId, String commonCode, String productNo, String reviewContent, String reviewTitle,
			String reviewGrade);

	
	void updateReview(int reviewNo);

	void deleteReview(int reviewNo);


	
	

}
