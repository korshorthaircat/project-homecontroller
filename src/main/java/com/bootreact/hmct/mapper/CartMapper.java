package com.bootreact.hmct.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface CartMapper {
	
	@Select("SELECT"
				+ "A.PRODUCT_NO,"	
				+ "B.USER_ID,"	
				+ "C.PRODUCT_NAME,"	
				+ "C.PRODUCT_SIZE,"		
				+ "C.PRODUCT_PRICE,"	
				+ "D.COMMON_CODE_NAME as color,"	
				+ "E.COMMON_CODE_NAME as material,"
				+ "F.COMMON_CODE_NAME as category,"	
				+ "A.PRODUCT_COUNT"
			+ "FROM "		
				+ "T_HMCT_CART A,"	
				+ "T_HMCT_USER B,"
				+ "T_HMCT_PRODUCT C,"	
				+ "T_HMCT_COMMON D,"	
				+ "T_HMCT_COMMON E,"
				+ "T_HMCT_COMMON F"
			+ "where "
				+ "A.USER_ID = B.USER_ID"
				+ "and	A.PRODUCT_NO = C.PRODUCT_NO"
				+ "and	A.COMMON_CODE = D.COMMON_CODE"
				+ "and C.product_material = E.common_code"
				+ "and C.product_category = F.common_code;")
	List<Map<String, Object>> getCartList(String userId);
	
}
