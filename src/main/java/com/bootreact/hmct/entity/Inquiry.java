package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_INQUIRY")
@Data
public class Inquiry {

	//문의글 번호(PK)
	@Id
	@Column(nullable = false)
	private String inquiryNo;
	
	//회원 아이디(FK)
	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;
		
	//문의글 제목 
	@Column(nullable = false)
	private String inquiryTitle;
	
//	//문의글 유형 
//	@Column(nullable = false)
//	private String inquiryType;
	
	//문의글 내용 
	@Column(nullable = false)
	private String inquiryContent;
	
	//문의글 처리현황 
	@Column(nullable = false)
	private String inquiryState;
	
	//문의글 등록일 
	@Column(nullable = false)
	private LocalDateTime inquiryRgsdate = LocalDateTime.now();
	
	//문의글 답변 
	@Column(nullable = true)
	private String inquiryAnswer;
	
}
