package com.bootreact.hmct.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.bootreact.hmct.entity.Showroom;
import com.bootreact.hmct.entity.ShowroomItem;

@Mapper
public interface ShowroomMapper {
	@Select("SELECT IFNULL(MAX(SHOWROOM_NO),0) +1 FROM T_HMCT_SHOWROOM")
	int getNextShowroomNo();
	
//	@Insert("INSERT INTO T_HMCT_SHOWROOM_ITEM(SHOWROOM_NO, PRODUCT_NO,PRODUCT_LOCATION_LEFT, PRODUCT_LOCATION_TOP) VALUES(#{showroomNo}, #{productNo}, #{productLocationLeft},#{productLocationTop})")
//	void insertShowroomItems(@Param("showroomNo") int showroomNo, @Param("productNo") int productNo ,@Param("productLocationLeft")String productLocationLeft, @Param("productLocationTop")String productLocationTop);
	
	@Select("SELECT * FROM T_HMCT_SHOWROOM WHERE SHOWROOM_COLOR = #{showroomColor}")
	List<Showroom> getColorShowroomList(@Param("showroomColor") String showroomColor);

	@Insert("INSERT INTO T_HMCT_SHOWROOM_ITEM(SHOWROOM_NO, PRODUCT_NO, PRODUCT_LOCATION_LEFT, PRODUCT_LOCATION_TOP) VALUES(#{showroomNo}, #{productNo}, #{productLocationLeft}, #{productLocationTop})")
	void insertShowroomItems(Map<String, Object> itemList);

	List<Map<String, Object>> getColorShowroomItemList(@Param("showroomNo") int showroomNo);

	List<Map<String, Object>> getShowroomItemList();

	List<Map<String, Object>> getShowroomProductItem(@Param("productNo")int productNo);
	
}
