package com.bootreact.hmct.controller.inquiry;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.dto.InquiryDTO;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.entity.Inquiry;
import com.bootreact.hmct.service.inquiry.InquiryService;

@RestController
@RequestMapping("/api/inquiry")
public class InquiryController {

	@Autowired
	InquiryService inquiryService;
	
//	//문의글 생성
//	void insertInquiryBoard(Inquiry inquiry, User user) {}
//
//	//문의글 내용 조회
//	void getInquiryBoard(User user) {}
	@GetMapping("/getInquiryList")
	public ResponseEntity<?> getInquiryList() {
		try {
			List<Inquiry> inquiryList = inquiryService.getInquiryList();
			
			List<InquiryDTO> inquiryDTOList = new ArrayList<InquiryDTO>();
 		
			for(Inquiry i : inquiryList) {
				InquiryDTO inquiryDTO = new InquiryDTO();
				
				inquiryDTO.setInquiryNo(i.getInquiryNo());
				inquiryDTO.setInquiryAnswer(i.getInquiryAnswer());
				inquiryDTO.setInquiryContent(i.getInquiryContent());
				inquiryDTO.setInquiryRgsdate(i.getInquiryRgsdate());
				inquiryDTO.setInquiryState(i.getInquiryState());
				inquiryDTO.setInquiryTitle(i.getInquiryTitle());
				inquiryDTO.setUser(i.getUser());
				
				inquiryDTOList.add(inquiryDTO);
			}
		ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
		
		response.setData(inquiryDTOList);
		
		return ResponseEntity.ok().body(response);
		
		}catch(Exception e) {
			System.out.println(e.getMessage());
			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
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
