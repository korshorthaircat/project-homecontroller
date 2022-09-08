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

	@Insert("INSERT into t_hmct_ordr ("
			+ "order_no, order_amount, order_date, order_discount, order_fee, order_memo, order_status, user_id"
			+ ") VALUE ("
			+ "(SELECT IFNULL(MAX(A.order_no), 0) + 1 FROM t_hmct_ordr A), #{orderAmount} , now(), #{orderDiscount}, #{orderFee}, null, null, #{userId})")
	void addOrder(@Param("userId") String userId, 
				  @Param("orderAmount") String orderAmount, 
				  @Param("orderDiscount") String orderDiscount, 
				  @Param("orderFee") String orderFee);
	
	void addOrderItem(@Param("productNo") String productNo, 
					  @Param("orderAmount") String productAmount, 
					  @Param("productCount") String productCount, 
					  @Param("commonCode") String commonCode);

	
	
}
