package com.bootreact.hmct.repository;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.Review;
import com.bootreact.hmct.entity.ReviewId;

public interface ReviewRepository extends JpaRepository<Review, Integer>{ 	
	@Query(value="select ifnull(max(a.review_no), 0) + 1 from t_hmct_review a where a.review_no = :productNo", nativeQuery = true)
	int selectNextReviewNo(@Param("productNo") int productNo);
}
