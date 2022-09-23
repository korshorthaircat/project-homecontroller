package com.bootreact.hmct.service.inquiry;

import java.util.List;

import com.bootreact.hmct.entity.Inquiry;

public interface InquiryService {
	
	List<Inquiry> getInquiryList();

	void addInquiry(int inquiryNo, String inquiryState, String userId, String inquiryContent, String inquiryTitle, String inquiryAnswer);

	void updateInquiry(int inquiryNo, String inquiryState, String inquiryAnswer);

	void deleteInquiry(int inquiryNo);

	

}
