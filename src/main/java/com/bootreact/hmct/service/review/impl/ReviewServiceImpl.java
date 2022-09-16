package com.bootreact.hmct.service.review.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Review;
import com.bootreact.hmct.mapper.ReviewMapper;
import com.bootreact.hmct.repository.ReviewRepository;
import com.bootreact.hmct.service.review.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService{
	@Autowired
    private ReviewRepository reviewRepository;
	
	@Autowired
	private ReviewMapper reviewMapper;

	@Override
	public List<Review> Review(Review review) {
		return null;
	}
    
    @Override
    public void InsertReview(Map<String, String> paramMap) {
    	int reviewNo = reviewRepository.selectNextReviewNo();
    	
    	paramMap.put("reviewNo", String.valueOf(reviewNo));
    	
    	reviewMapper.insertReview(paramMap);
    }
}
