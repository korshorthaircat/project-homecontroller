package com.bootreact.hmct.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ReviewDTO {
	private int reviewNo;
	private String reviewTitle;
	private String reviewContent;
	private String reviewGrade;
	private LocalDateTime ReviewRegdate;
	
	private int productNo;
	private String productName;
	private String proudctImageName;
	private String userId;
	private String commonCode;
	
	
}
