package com.bootreact.hmct.mapper;

import java.util.List;

import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface OrderMapper {
	Map<String, Object> viewOrder(int orderNo);
	
	List<Map<String, Object>> getOrderItemList(int orderNo);

	@Select("SELECT IFNULL(MAX(order_no), 0) + 1 FROM t_hmct_ordr")
	int createOrderNo();

	@Insert("INSERT into t_hmct_ordr ("
			+ "order_no, order_amount, order_date, order_discount, order_fee, order_memo, order_status, user_id"
			+ ") VALUES ("
			+ "#{orderNo}, #{orderAmount} , now(), #{orderDiscount}, #{orderFee}, null, #{orderStatus}, #{userId})")
	void addOrder(@Param("orderNo") int orderNo,
				  @Param("orderStatus") String orderStatus,
				  @Param("userId") String userId, 
				  @Param("orderAmount") String orderAmount, 
				  @Param("orderDiscount") String orderDiscount, 
				  @Param("orderFee") String orderFee);
	
	
	@Insert("insert into t_hmct_ordritem ("
			+ "order_no, product_no, product_amount, product_count, product_discount, common_code"
			+ ") values ("
			+ "#{orderNo}, #{productNo}, #{orderAmount}, #{productCount}, 0, #{commonCode})")
	void addOrderItem(@Param("orderNo") int orderNo,
					  @Param("productNo") String productNo, 
					  @Param("orderAmount") String productAmount, 
					  @Param("productCount") String productCount, 
					  @Param("commonCode") String commonCode);

    @Insert("insert into t_hmct_dlvy ("
    		+ "delivery_no, delivery_address, delivery_detail_address, delivery_message, delivery_name, delivery_tel, delivery_tracking_no, delivery_zipcode, order_no"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.delivery_no), 0) + 1 FROM t_hmct_dlvy A), #{deliveryAddress}, #{deliveryDetailAddress}, #{deliveryMessage}, #{deliveryName}, #{deliveryTel}, null, #{deliveryZipcode}, #{orderNo})")
	void addDelivery(@Param("orderNo") int orderNo, 
					 @Param("deliveryName") String deliveryName, 
					 @Param("deliveryTel") String deliveryTel, 
					 @Param("deliveryZipcode") String deliveryZipcode,
					 @Param("deliveryAddress") String deliveryAddress, 
					 @Param("deliveryDetailAddress") String deliveryDetailAddress, 
					 @Param("deliveryMessage") String deliveryMessage);
	
    @Insert("insert into t_hmct_pmt ("
    		+ "payment_no, payment_amount, payment_date, order_no, payment_name, payment_way"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.payment_no), 0) + 1 FROM t_hmct_pmt A), #{paymentAmount}, now(), #{orderNo}, #{paymentName}, #{paymentWay} )")
	void addPayment( @Param("orderNo") int orderNo, 
					 @Param("paymentName") String paymentName, 
					 @Param("paymentAmount") String paymentAmount, 
					 @Param("paymentWay") String paymentWay);
    
	void updateOrder(Map<String, Object> paramMap);
	
	void updatePayment(Map<String, Object> paramMap);
	
	void updateDelivery(Map<String, Object> paramMap);

    @Update("update t_hmct_ordr"
    		+ "  set order_status = #{orderStatus}"
    		+ "  where order_no = #{orderNo}")
    void updateStatus(@Param ("orderNo") int orderNo,
    				  @Param ("orderStatus") String orderStatus);

    @Select("select max(order_no) from t_hmct_ordr where user_id = #{userId}")
	int getRecentOrder(@Param ("userId") String userId);
}
