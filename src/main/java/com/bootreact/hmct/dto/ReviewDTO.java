package com.bootreact.hmct.dto;

import java.time.LocalDateTime;

import com.bootreact.hmct.entity.User;

import lombok.Data;

@Data
public class ReviewDTO {
	private int revNo;
	private String revTitle;
	private LocalDateTime revRgsde;
	private String revGrade;
	private String revContent;
	private int orderNo;
	private int productNo;
	
	
}
