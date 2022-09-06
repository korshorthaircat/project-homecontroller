package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ShowroomMapper {
	@Select("SELECT IFNULL(MAX(SHOWROOM_NO),0) +1 FROM T_HMCT_SHOWROOM_ITEM WHERE SHOWROOM_NO = #{showroomNO}")
	int getNextShowroomNo(int showroomNo);
}
