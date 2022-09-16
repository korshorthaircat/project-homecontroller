package com.bootreact.hmct.service.review;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Review;

@Service
public interface ReviewService {

	List<Review> Review(Review review);
    
	void InsertReview(Map<String, String> paramMap);
	
}
