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
	
	List<Map<String, Object>> getWishItemList(String userId);

	
	@Delete("DELETE FROM t_hmct_wishitem "
			+ " WHERE user_id = #{userId}"
			+ " and product_no = #{productNo}")
	void deleteWishItem(@Param("userId") String userId, 
					@Param("productNo") int productNo);


	@Insert("INSERT into t_hmct_wishitem ("
			+ " product_no, user_id"
			+ " ) VALUE ("
			+ " #{productNo}, #{userId}"
			+ ")")
	void addWishItem(@Param("userId") String userId, 
				 @Param("productNo") int productNo); 
	
	
}
