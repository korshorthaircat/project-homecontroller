package com.bootreact.hmct.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewMapper {
	@Insert("INSERT INTO T_HMCT_REVIEW "
			+ "(REVIEW_NO, REVIEW_CONTENT, REVIEW_GRADE, REVIEW_REGDATE, REVIEW_TITLE, ORDER_NO, COMMON_CODE, PRODUCT_NO)"
			+ " VALUES (#{reviewNo}, #{reviewContent}, #{reviewGrade}, NOW(), #{reviewTitle}, #{orderNo}, #{commonCode}, #{productNo})")
	void insertReview(Map<String, String> paramMap);
}
