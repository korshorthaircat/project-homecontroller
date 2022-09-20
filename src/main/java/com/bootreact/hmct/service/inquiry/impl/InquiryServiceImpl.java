package com.bootreact.hmct.service.inquiry.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Inquiry;
import com.bootreact.hmct.repository.InquiryRepository;
import com.bootreact.hmct.service.inquiry.InquiryService;

@Service
public class InquiryServiceImpl implements InquiryService{
//	@Autowired
//	private InquiryRepository inquiryRepository;
	
//	@Override
//	public List<Inquiry> getInquiryBoard() {
//		return InquiryRepository.findAll();
//	}
	
	@Autowired
	InquiryRepository inquiryRepository;
	
	@Override
	public List<Inquiry> getInquiryList() {
		return inquiryRepository.findAll();
	}
}
