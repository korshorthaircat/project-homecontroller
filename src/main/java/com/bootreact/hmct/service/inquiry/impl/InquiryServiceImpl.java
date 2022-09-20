package com.bootreact.hmct.service.inquiry.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Inquiry;
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
	public void addinquiry(int inquiryNo, String inquiryState, String userId, String inquiryContent,
			String inquiryTitle) {
		inquiryMapper.addinquiry(inquiryNo, inquiryState, userId, inquiryContent,inquiryTitle);
	}
}
