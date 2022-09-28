package com.bootreact.hmct.service.review.impl;

import java.time.LocalDateTime;
import java.util.HashMap;
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
	public List<Review> getReviewList() {
		return reviewRepository.findAll();
	}

//	@Override
//	public List<Map<String, Object>> getReviewListByProductNo(int productNo) {
//		return reviewMapper.getReviewListByProductNo(productNo);
//	}
	
	@Override
	public void addReview(String userId, String commonCode, int productNo, int orderNo, int reviewGrade,
			String reviewContent, String reviewTitle) {
		reviewMapper.addReview(userId, commonCode, productNo, orderNo, reviewGrade, reviewContent, reviewTitle );
	}

	@Override
	public void updateReview(int reviewNo) {
		reviewMapper.updateReview(reviewNo);
	}

	@Override
	public void deleteReview(int reviewNo) {
		reviewMapper.deleteReview(reviewNo);
	}

	@Override
	public int getAvgRevGradeByProductNo(int productNo) {
		return reviewMapper.getAvgRevGradeByProductNo(productNo);
	}
	
	@Override
	public Map<String, Object> myReviewImg() {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
//		resultMap.put("orderDetail", orderMapper.viewOrder(orderNo));
    	resultMap.put("reviewItemList", reviewMapper.getReviewItemList());
    	
    	return resultMap;
	}


//	@Override
//	public List<Review> getMyReviewList(String userId) {
//		return reviewRepository.findByUserUserId(userId);
//	}

	@Override
	public List<Map<String, Object>> getMyReviewList(String userId) {
		return reviewMapper.getMyReviewList(userId);
	}
	

}
