package com.bootreact.hmct.dto;

import java.time.LocalDateTime;

import com.bootreact.hmct.entity.User;

import lombok.Data;

@Data
public class ReviewDTO {
	private int reviewNo;
	private String reviewTitle;
	private LocalDateTime ReviewRegdate;
	private String reviewGrade;
	private String reviewContent;
	
	private int productNo;
	private User user;
	private String commonCode;
	
	
}
