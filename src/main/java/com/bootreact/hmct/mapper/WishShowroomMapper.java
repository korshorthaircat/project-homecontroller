package com.bootreact.hmct.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface WishShowroomMapper {
	

	List<Map<String, Object>> getWishShowroom(String userId);

	
	@Delete("DELETE FROM t_hmct_wishshowroom"
			+ " WHERE user_id = #{userId}"
			+ " and showroom_no = #{showroomNo}")
	void deleteWishShowroom(@Param("userId") String userId, 
					@Param("showroomNo") int showroomNo);


	@Insert("INSERT into t_hmct_wishshowroom ("
			+ " showroom_no, user_id"
			+ " ) VALUE ("
			+ " #{showroomNo}, #{userId}"
			+ ")")
	void addWishShowroom(@Param("userId") String userId, 
				 @Param("showroomNo") int showroomNo); 
	
	
}
