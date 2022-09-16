package com.bootreact.hmct.service.refund.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.mapper.RefundMapper;
import com.bootreact.hmct.repository.CancelRepository;
import com.bootreact.hmct.repository.RefundRepository;
import com.bootreact.hmct.repository.RetunRepository;
import com.bootreact.hmct.service.refund.RefundService;

@Service
public class RefundServiceImpl implements RefundService{
    @Autowired
    CancelRepository cancelRepository;
    
    @Autowired
    RefundRepository refundRepository;
    
    @Autowired
    RetunRepository retunRepository;
    
    @Autowired
    RefundMapper refundMapper;
    
    @Override
    public Map<String, Object> createCancel(Map<String, Object> paramMap){
    	
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	
    	return resultMap;
    	
    }
}
