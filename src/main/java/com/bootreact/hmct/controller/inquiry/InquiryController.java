package com.bootreact.hmct.controller.inquiry;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bootreact.hmct.entity.Inquiry;
import com.bootreact.hmct.service.inquiry.InquiryService;

@RequestMapping("/api/inquiry")
public class InquiryController {

	@Autowired
	InquiryService inquiryService;
	
//	//문의글 생성
//	void insertInquiryBoard(Inquiry inquiry, User user) {}
//
//	//문의글 내용 조회
//	void getInquiryBoard(User user) {}
	@GetMapping("/getInquiryBoard")
	public List<Inquiry> getInquiryBoard() {
		
		return inquiryService.getInquiryBoard();
	}
//
//	//문의글 목록 조회
//	void getInquiryBoardList(User user) {}
//
//	//문의글 삭제
//	void deleteInquiryBoard(Inquiry inquiry, User user) {}
//
//	//문의글 수정
//	void updateInquiryBoard(Inquiry inquiry, User user) {}
}
