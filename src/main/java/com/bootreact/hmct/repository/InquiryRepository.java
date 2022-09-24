package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.Inquiry;
import com.bootreact.hmct.entity.Order;

public interface InquiryRepository extends JpaRepository<Inquiry, String>{
	
	List<Inquiry> findByUserUserId(String userId);
}
