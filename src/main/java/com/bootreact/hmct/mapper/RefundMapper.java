package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface RefundMapper {
	
	@Select("SELECT IFNULL(MAX(order_no), 0) + 1 FROM t_hmct_cancel")
	int createCancelNo();
	
	@Insert("insert into t_hmct_cancel ("
    		+ "canecel_no, cancel_amount, cancel_rgsdate, cancel_status, cancel_reason, order_no"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.cancel_no), 0) + 1 FROM t_hmct_cancel A), #{cancelAmount}, now(), #{cancelStatus}, #{cancelReason}, #{orderNo} )")
	void addCancel(@Param ("orderNo") int orderNo,
			       @Param ("cancelNo")String cancelNo, 
			       @Param("cancelAmount") String cancelAmount, 
			       @Param("cancelStatus")String cancelStatus, 
			       @Param("cancelReason")String cancelReason
			       );

}
