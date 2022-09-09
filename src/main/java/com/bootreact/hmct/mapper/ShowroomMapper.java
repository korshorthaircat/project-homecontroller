package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ShowroomMapper {
	@Select("SELECT IFNULL(MAX(SHOWROOM_NO),0) +1 FROM T_HMCT_SHOWROOM")
	int getNextShowroomNo();
	
	@Insert("INSERT INTO T_HMCT_SHOWROOM_ITEM(SHOWROOM_NO, PRODUCT_NO) VALUES(#{showroomNo}, #{productNo})")
	void insertShowroomItems(@Param("showroomNo") int showroomNo, @Param("productNo") int productNo);
}
