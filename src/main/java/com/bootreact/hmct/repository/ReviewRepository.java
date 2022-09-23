package com.bootreact.hmct.repository;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootreact.hmct.entity.OrderItem;
import com.bootreact.hmct.entity.Review;
import com.bootreact.hmct.entity.ReviewId;

public interface ReviewRepository extends JpaRepository<Review, ReviewId>{ 	
	
	
//	@Query(value="select ifnull(max(a.review_no), 0) + 1 from t_hmct_review a", nativeQuery = true)
//	int selectNextReviewNo();
	
	
}
