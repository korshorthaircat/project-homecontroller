package com.bootreact.hmct.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
	
	Map<String, Object> Idfind(@Param("userName")String userName, 
							   @Param("userMail") String userMail);

}
