package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface ReviewMapper {

	@Insert("INSERT INTO t_hmct_review\r\n"
			+ "	(review_no,\r\n"
			+ "	review_user_id,\r\n"
			+ "	review_title,\r\n"
			+ "	review_content,\r\n"
			+ "	review_regdate,\r\n"
			+ "	review_grade,\r\n"
			+ "	common_code,\r\n"
			+ "	product_no)\r\n"
			+ "	VALUES\r\n"
			+ "	((SELECT IFNULL(MAX(A.review_no), 0) + 1 FROM t_hmct_review A),\r\n"
			+ "	#{userId},\r\n"
			+ "	#{reviewTitle},\r\n"
			+ "	#{reviewContent},\r\n"
			+ "	now(),\r\n"
			+ "	#{reviewGrade},\r\n"
			+ "	#{commonCode},\r\n"
			+ "	#{productNo});")
	void addReview(@Param("reviewNo") int reviewNo);

	@Update("UPDATE t_hmct_review"
			+ "	WHERE review_no=#{reviewNo}")	
	void updateReview(@Param("reviewNo") int reviewNo);
	
	@Delete("DELETE FROM t_hmct_review"
			+ "	WHERE review_no=#{reviewNo}")
	void deleteReview(int reviewNo);
}
