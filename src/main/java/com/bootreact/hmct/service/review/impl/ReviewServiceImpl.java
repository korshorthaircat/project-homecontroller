package com.bootreact.hmct.service.review.impl;

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
}
