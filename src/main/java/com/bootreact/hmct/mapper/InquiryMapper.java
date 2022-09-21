package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface InquiryMapper {

	@Insert("INSERT INTO t_hmct_inquiry\r\n"
			+ "	(inquiry_no,\r\n"
			+ "	inquiry_answer,\r\n"
			+ "	inquiry_content,\r\n"
			+ "	inquiry_rgsdate,\r\n"
			+ "	inquiry_state,\r\n"
			+ "	inquiry_title,\r\n"
			+ "	user_id)\r\n"
			+ "	VALUES\r\n"
			+ "	((SELECT IFNULL(MAX(A.inquiry_no), 0) + 1 FROM t_hmct_inquiry A),\r\n"
			+ "	#{inquiryAnswer},\r\n"
			+ "	#{inquiryContent},\r\n"
			+ "	now(),\r\n"
			+ "	#{inquiryState},\r\n"
			+ "	#{inquiryTitle},\r\n"
			+ "	#{userId});")
	void addInquiry(@Param("inquiryNo") int inquiryNo,
					@Param("inquiryState") String inquiryState,
					@Param("inquiryAnswer") String inquiryAnswer,
					@Param("userId") String userId,
					@Param("inquiryContent") String inquiryContent,
					@Param("inquiryTitle") String inquiryTitle
					);

	@Update("UPDATE t_hmct_inquiry"
			+ "	SET inquiry_answer=#{inquiryAnswer}, inquiry_state=#{inquiryState} "
			+ "	WHERE inquiry_no=#{inquiryNo}")	
	void updateInquiry(@Param("inquiryNo") int inquiryNo, 
					   @Param("inquiryState") String inquiryState, 
					   @Param("inquiryAnswer") String inquiryAnswer);

	@Delete("DELETE FROM t_hmct_inquiry"
			+ "	WHERE inquiry_no=#{inquiryNo}")
	void deleteInquiry(int inquiryNo);
	

}
