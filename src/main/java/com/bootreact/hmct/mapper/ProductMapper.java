package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Select;

@Mapper
public interface ProductMapper {
	@Select("SELECT IFNULL(MAX(PRODUCT_IMAGE_NO), 0) + 1 FROM T_HMCT_PRODUCT_IMAGE WHERE PRODUCT_NO = #{productNo}")
	int getNextProductImageNo(int productNo);
}
