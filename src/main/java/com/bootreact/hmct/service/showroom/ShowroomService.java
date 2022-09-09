package com.bootreact.hmct.service.showroom;

import java.util.List;

import com.bootreact.hmct.entity.Showroom;

public interface ShowroomService {
	int getNextShowroomNo();
	
	void insertShowroom(Showroom showroom);
	
	void insertShowroomItems(int showroomNo, List<Integer> productNos);
	
	List<Showroom> getShowroomList();
	
	
}
