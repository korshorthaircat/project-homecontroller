package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface InquiryMapper {

	@Insert("INSERT INTO t_hmct_inquiry\r\n"
			+ "			(inquiry_no,\r\n"
			+ "					inquiry_answer,\r\n"
			+ "					inquiry_content,\r\n"
			+ "					inquiry_rgsdate,\r\n"
			+ "					inquiry_state,\r\n"
			+ "					inquiry_title,\r\n"
			+ "					user_id)\r\n"
			+ "					VALUES\r\n"
			+ "					((SELECT IFNULL(MAX(A.inquiry_no), 0) + 1 FROM t_hmct_inquiry A),\r\n"
			+ "					null,\r\n"
			+ "					#{inquiryContent},\r\n"
			+ "					now(),\r\n"
			+ "					#{inquiryState},\r\n"
			+ "					#{inquiryTitle},\r\n"
			+ "					#{userId});")
	void addinquiry(@Param("inquiryNo") int inquiryNo,
					@Param("inquiryState") String inquiryState,
					@Param("userId") String userId,
					@Param("inquiryContent") String inquiryContent,
					@Param("inquiryTitle") String inquiryTitle
					);
	
//	void addinquiry(int inquiryNo, String inquiryState, String userId, String inquiryContent, String inquiryTitle);

}
