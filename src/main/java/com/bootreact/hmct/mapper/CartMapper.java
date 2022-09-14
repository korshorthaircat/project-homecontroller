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
public interface CartMapper {
	
	@Select("SELECT "
				+ "A.PRODUCT_NO,"	
				+ "B.USER_ID,"	
				+ "C.PRODUCT_NAME,"	
				+ "C.PRODUCT_SIZE,"		
				+ "C.PRODUCT_PRICE,"	
				+ "D.COMMON_CODE_NAME as color,"	
				+ "E.COMMON_CODE_NAME as material,"
				+ "F.COMMON_CODE_NAME as category,"	
				+ "A.PRODUCT_COUNT"
			+ " FROM "		
				+ "T_HMCT_CART A,"	
				+ "T_HMCT_USER B,"
				+ "T_HMCT_PRODUCT C,"	
				+ "T_HMCT_COMMON D,"	
				+ "T_HMCT_COMMON E,"
				+ "T_HMCT_COMMON F"
			+ " where "
				+ "A.USER_ID = B.USER_ID"
				+ " and	A.PRODUCT_NO = C.PRODUCT_NO"
				+ " and	A.COMMON_CODE = D.COMMON_CODE"
				+ " and C.product_material = E.common_code"
				+ " and C.product_category = F.common_code"
				+ " and A.USER_ID = #{userId}")
	List<Map<String, Object>> getCartList(String userId);

	
	@Delete("DELETE FROM t_hmct_cart "
			+ " WHERE user_id = #{userId}"
			+ " and common_code = #{commonCode}"
			+ " and product_no = #{productNo}")
	void deleteCart(@Param("userId") String userId, 
					@Param("productNo") int productNo, 
					@Param("commonCode") String commonCode);


	@Insert("INSERT into t_hmct_cart ("
			+ " common_code, product_no, user_id, product_count"
			+ " ) VALUE ("
			+ "#{commonCode}, #{productNo}, #{userId}, 1"
			+ ")")
	void addCart(@Param("userId") String userId, 
				 @Param("productNo") int productNo, 
				 @Param("commonCode") String commonCode);

	
	@Update("update t_hmct_cart \n"
			+ "set product_count = #{productCount} \n"
			+ "where user_id =#{userId} \n"
			+ "and product_no = #{productNo}\n"
			+ "and common_code = #{commonCode};")
	void updateCart(@Param("userId") String userId, 
					@Param("productNo") int productNo, 
					@Param("commonCode") String commonCode, 
					@Param("productCount") int productCount);
	
	
}
