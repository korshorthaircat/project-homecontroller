package com.bootreact.hmct.service.review.impl;

import java.time.LocalDateTime;
import java.util.List;

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
	public List<Review> getReviewList() {
		return reviewRepository.findAll();
	}

	@Override
	public void addReview(int reviewNo, String userId, String commonCode, String productNo, String reviewContent,
			String reviewTitle, String reviewGrade) {
		reviewMapper.addReview(reviewNo);
	}

	@Override
	public void updateReview(int reviewNo) {
		reviewMapper.updateReview(reviewNo);
	}

	@Override
	public void deleteReview(int reviewNo) {
		reviewMapper.deleteReview(reviewNo);
	}

}
