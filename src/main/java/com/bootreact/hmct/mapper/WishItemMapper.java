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
public interface WishItemMapper {
	
	@Select("SELECT "
				+ "A.PRODUCT_NO,"	
				+ "B.USER_ID,"	
				+ "C.PRODUCT_NAME,"
				+ "D.PRODUCT_IMAGE_NO"
				+ "D.PRODUCT_IMAGE_NAME,"
			+ " FROM "		
				+ "T_HMCT_WISHITEM A,"	
				+ "T_HMCT_USER B,"
				+ "T_HMCT_PRODUCT C,"
				+ "T_HMCT_PRODUCT_IMAGE D"
			+ " where "
				+ "A.USER_ID = B.USER_ID"
				+ " and	A.PRODUCT_NO = C.PRODUCT_NO"
				+ " and A.USER_ID = #{userId}")
	List<Map<String, Object>> getWishItem(String userId);

	
	@Delete("DELETE FROM t_hmct_wishitem "
			+ " WHERE user_id = #{userId}"
			+ " and product_no = #{productNo}")
	void deleteWishItem(@Param("userId") String userId, 
					@Param("productNo") int productNo);


	@Insert("INSERT into t_hmct_wishitem ("
			+ " product_no, user_id"
			+ " ) VALUE ("
			+ " #{productNo}, #{userId}, 1"
			+ ")")
	void addWishItem(@Param("userId") String userId, 
				 @Param("productNo") int productNo); 



	void getWishItem(String userId, int productNo); 
	
	
}
