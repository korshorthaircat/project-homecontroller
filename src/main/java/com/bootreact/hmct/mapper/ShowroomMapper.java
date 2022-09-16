package com.bootreact.hmct.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.bootreact.hmct.entity.Showroom;

@Mapper
public interface ShowroomMapper {
	@Select("SELECT IFNULL(MAX(SHOWROOM_NO),0) +1 FROM T_HMCT_SHOWROOM")
	int getNextShowroomNo();
	
	@Insert("INSERT INTO T_HMCT_SHOWROOM_ITEM(SHOWROOM_NO, PRODUCT_NO) VALUES(#{showroomNo}, #{productNo})")
	void insertShowroomItems(@Param("showroomNo") int showroomNo, @Param("productNo") int productNo);
	
	@Select("SELECT * FROM T_HMCT_SHOWROOM WHERE SHOWROOM_COLOR = #{showroomColor}")
	List<Showroom> getColorShowroomList(@Param("showroomColor") String showroomColor);
}
