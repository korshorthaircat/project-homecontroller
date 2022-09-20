package com.bootreact.hmct.service.showroom;

import java.util.List;
import java.util.Map;

import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.entity.ShowroomItem;

public interface ShowroomService {
	int getNextShowroomNo();
	
	void insertShowroom(Showroom showroom);
	
//	void insertShowroomItems(int showroomNo, List<Integer> productNos, productLocationLeft, productLocationTop);
	
	List<Showroom> getShowroomList();
	
	List<Showroom> getColorShowroomList(String showroomColor);

	void insertShowroomItems(List<Map<String, Object>> itemList, int srNo);
	
	List<Map<String, Object>> getColorShowroomItemList(int showroomNo);
	
	List<Map<String, Object>> getShowroomItemList();

	List<Map<String, Object>> getShowroomProductItem(int productNo);
}
