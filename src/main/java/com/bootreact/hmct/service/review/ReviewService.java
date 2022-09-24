package com.bootreact.hmct.service.review;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Review;

@Service
public interface ReviewService {
	
	List<Review> getReviewList();
	
//	List<Map<String, Object>> getReviewListByProductNo(int productNo);

	void addReview(String userId, 
				   String commonCode, 
				   int productNo, 
				   int orderNo, 
				   int reviewGrade, 
				   String reviewContent,
				   String reviewTitle);

	void updateReview(int reviewNo);

	void deleteReview(int reviewNo);

	int getAvgRevGradeByProductNo(int productNo);


	


	
	

}
