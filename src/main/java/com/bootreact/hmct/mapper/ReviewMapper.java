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
public interface ReviewMapper {

	@Insert("INSERT INTO t_hmct_review ("
			+ "	review_no,"
			+ "	review_title,"
			+ "	review_content,"
			+ "	review_grade,"
			+ "	review_regdate,"
			+ "	common_code,"
			+ "	product_no,"
			+ "	order_no"
			+ "	) values ("
			+ "	(SELECT IFNULL(MAX(A.review_no), 0) + 1 FROM t_hmct_review A),"
			+ "	#{reviewTitle},"
			+ "	#{reviewContent},"
			+ "	#{reviewGrade},"
			+ "	now(),"
			+ "	#{commonCode},"
			+ "	#{productNo},"
			+ "	#{orderNo})")
	void addReview(@Param("userId") String userId, 
				   @Param("commonCode") String commonCode, 
				   @Param("productNo") int productNo, 
				   @Param("orderNo") int orderNo, 
				   @Param("reviewGrade") int reviewGrade, 
				   @Param("reviewContent") String reviewContent,
				   @Param("reviewTitle") String reviewTitle);

	@Update("UPDATE t_hmct_review"
			+ "	WHERE review_no=#{reviewNo}")	
	void updateReview(@Param("reviewNo") int reviewNo);
	
	@Delete("DELETE FROM t_hmct_review"
			+ "	WHERE review_no=#{reviewNo}")
	void deleteReview(int reviewNo);

//	@Select("select * from t_hmct_review "
//			+ "where product_no = #{productNo}")
//	List<Map<String, Object>> getReviewListByProductNo(int productNo);

	
}
