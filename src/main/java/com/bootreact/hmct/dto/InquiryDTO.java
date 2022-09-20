package com.bootreact.hmct.dto;

import java.time.LocalDate;

import com.bootreact.hmct.entity.User;

import lombok.Data;

@Data
public class InquiryDTO {
	private int InquiryNo;
	private String InquiryAnswer;
	private String InquiryContent;
	private LocalDate InquiryRgsdate;
	private String InquiryState;
	private String InquiryTitle;
	private User user;
}
