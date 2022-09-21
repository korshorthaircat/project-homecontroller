package com.bootreact.hmct.controller.inquiry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
//	문의글 생성
	@PostMapping("/insertInquiryBoard")
	public ResponseEntity<?> insertInquiryBoard(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
		try {
			int inquiryNo = 1;
			String inquiryState = "답변대기";
			String inquiryAnswer = "빠른 시일 내에 답변 드리겠습니다.";
			
			//문의글 추가 처리하기
			inquiryService.addInquiry(inquiryNo,
									  inquiryState,
									  userId,
									  paramMap.get("inquiryContent"),
									  paramMap.get("inquiryTitle"),
									  inquiryAnswer);
			
			//게시글 목록 받아오기
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
		
		}catch(Exception e){
			System.out.println(e.getMessage());
			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
}
	
//	문의글 목록 조회
	@PostMapping("/getInquiryList")
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


//	문의글 수정
	@PostMapping("/updateInquiryBoard")
	public ResponseEntity<?> updateInquiryBoard(@RequestBody Map<String, String> paramMap) {
		try {
			String inquiryState = "답변완료";
			
			//문의글 수정 처리하기
			inquiryService.updateInquiry(Integer.parseInt(paramMap.get("inquiryNo")), 
										 inquiryState, 
										 paramMap.get("inquiryAnswer")
										);
			
			//게시글 목록 받아오기
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
		
		}catch(Exception e){
			System.out.println(e.getMessage());
			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
}


//	문의글 삭제
	@DeleteMapping("/deleteInquiryBoard")
	public ResponseEntity<?> deleteInquiryBoard(@RequestBody Map<String, String> paramMap) {
		try {
			//문의글 삭제 처리하기
			inquiryService.deleteInquiry(Integer.parseInt(paramMap.get("inquiryNo")));
			
			//게시글 목록 받아오기
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
		
		}catch(Exception e){
			System.out.println(e.getMessage());
			ResponseDTO<InquiryDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
}
