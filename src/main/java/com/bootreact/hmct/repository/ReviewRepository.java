package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.Review;
import com.bootreact.hmct.entity.ReviewId;

public interface ReviewRepository extends JpaRepository<Review, ReviewId>{

}
