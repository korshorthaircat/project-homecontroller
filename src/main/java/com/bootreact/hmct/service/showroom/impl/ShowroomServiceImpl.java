package com.bootreact.hmct.service.showroom.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.mapper.ShowroomMapper;
import com.bootreact.hmct.repository.ShowroomRepository;
import com.bootreact.hmct.service.showroom.ShowroomService;

@Service
public class ShowroomServiceImpl implements ShowroomService{
	@Autowired
	private ShowroomRepository showroomRepository;
	
	@Autowired
	private ShowroomMapper showroomMapper;
	
	@Override
	public int getNextShowroomNo() {
		return showroomMapper.getNextShowroomNo();
	}
	
	@Override
	public void insertShowroom(Showroom showroom) {
		showroomRepository.save(showroom);
	}
	
	@Override
	public void insertShowroomItems(int showroomNo, List<Integer> productNos) {
		for(int productNo : productNos) {
			showroomMapper.insertShowroomItems(showroomNo, productNo);
		}
	}
	
	@Override
	public List<Showroom> getShowroomList() {
		return showroomRepository.findAll();
	}
	
	@Override
	public List<Showroom> getColorShowroomList(String showroomColor) {
		return showroomMapper.getColorShowroomList(showroomColor);
	}
}
