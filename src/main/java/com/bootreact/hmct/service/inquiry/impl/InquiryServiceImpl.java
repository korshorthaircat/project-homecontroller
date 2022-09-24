package com.bootreact.hmct.service.inquiry.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Inquiry;
import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.mapper.InquiryMapper;
import com.bootreact.hmct.repository.InquiryRepository;
import com.bootreact.hmct.service.inquiry.InquiryService;

@Service
public class InquiryServiceImpl implements InquiryService{

	@Autowired
	InquiryRepository inquiryRepository;
	
	@Autowired
	InquiryMapper inquiryMapper;
	
	@Override
	public List<Inquiry> getInquiryList() {
		return inquiryRepository.findAll();
	}

	@Override
	public void addInquiry(int inquiryNo, String inquiryState, String userId, String inquiryContent,
			String inquiryTitle, String inquiryAnswer) {
		inquiryMapper.addInquiry(inquiryNo, inquiryState, inquiryAnswer, userId, inquiryContent,inquiryTitle);
	}

	@Override
	public void updateInquiry(int inquiryNo, String inquiryState, String inquiryAnswer) {
		inquiryMapper.updateInquiry(inquiryNo, inquiryState, inquiryAnswer);
	}

	@Override
	public void deleteInquiry(int inquiryNo) {
		inquiryMapper.deleteInquiry(inquiryNo);
	}
	
	@Override
	public List<Inquiry> getMyInquiryList(String userId) {
		return inquiryRepository.findByUserUserId(userId);
	}

}
