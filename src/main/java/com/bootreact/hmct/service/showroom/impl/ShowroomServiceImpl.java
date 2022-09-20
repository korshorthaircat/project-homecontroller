package com.bootreact.hmct.service.showroom.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.entity.ShowroomItem;
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
	
//	@Override
//	public void insertShowroomItems(int showroomNo, List<Integer> productNos, productLocationLeft, productLocationTop) {
//		for(int productNo : productNos) {
//			showroomMapper.insertShowroomItems(showroomNo, productNo);
//		}
//	}
	
	@Override
	public List<Showroom> getShowroomList() {
		return showroomRepository.findAll();
	}
	
	@Override
	public List<Showroom> getColorShowroomList(String showroomColor) {
		return showroomMapper.getColorShowroomList(showroomColor);
	}

	@Override
	public void insertShowroomItems(List<Map<String, Object>> itemList, int srNo) {
		for(int i = 0; i < itemList.size(); i++) {
			Map<String, Object> item = itemList.get(i);
			item.put("showroomNo", srNo);
			showroomMapper.insertShowroomItems(item);
		}
	}
	
	@Override
	public List<Map<String, Object>> getColorShowroomItemList(int showroomNo) {
		return showroomMapper.getColorShowroomItemList(showroomNo);
	}
	
	@Override
	public List<Map<String, Object>> getShowroomItemList() {
		return showroomMapper.getShowroomItemList();
	}

	@Override
	public List<Map<String, Object>> getShowroomProductItem(int productNo) {
		return showroomMapper.getShowroomProductItem(productNo);
	}
}
