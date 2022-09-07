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
public interface OrderMapper {
	Map<String, Object> viewOrder(int orderNo);
	
	List<Map<String, Object>> getOrderItemList(int orderNo);
}
