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
	
	@Select("SELECT "
				+ "A.SHOWROOM_NO,"
				+ "B.USER_ID,"
				+ "C.SHOWROOM_IMG_NAME,"
				+ "C.SHOWROOM_IMG_ORIGINAL_NAME"
			+ " FROM "
				+ "T_HMCT_WISHSHOWROOM A,"
				+ "T_HMCT_USER B,"
				+ "T_HMCT_SHOWROOM C"
			+ " where "
				+ "A.USER_ID = B.USER_ID"
				+ " and	A.SHOWROOM_NO = C.SHOWROOM_NO"
				+ " and A.USER_ID = #{userId}")
	List<Map<String, Object>> getWishShowroom(String userId);

	
	@Delete("DELETE FROM t_hmct_wishshowroom"
			+ " WHERE user_id = #{userId}"
			+ " and product_no = #{showroomNo}")
	void deleteWishShowroom(@Param("userId") String userId, 
					@Param("productNo") int showroomNo);


	@Insert("INSERT into t_hmct_wishshowroom ("
			+ " showroom_no, user_id"
			+ " ) VALUE ("
			+ " #{showroomNo}, #{userId}, 1"
			+ ")")
	void addWishShowroom(@Param("userId") String userId, 
				 @Param("showroomNo") int showroomNo); 
	
	
}
