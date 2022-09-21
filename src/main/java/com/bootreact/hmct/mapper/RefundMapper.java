package com.bootreact.hmct.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface RefundMapper {
	
	@Select("SELECT IFNULL(MAX(cancel_no), 0) + 1 FROM t_hmct_cancel")
	int createCancelNo();
	
	@Select("SELECT IFNULL(MAX(refund_no), 0) + 1 FROM t_hmct_refnd")
	int createRefundNo();
	
	@Insert("insert into t_hmct_cancel ("
    		+ "cancel_no, order_no, cancel_amount, cancel_rgsdate, cancel_status, cancel_reason"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.cancel_no), 0) + 1 FROM t_hmct_cancel A), #{orderNo},  #{cancelAmount}, now(), #{cancelStatus}, #{cancelReason} )")
	void addCancel(@Param ("cancelNo")int cancelNo,
			       @Param ("orderNo") int orderNo,
			       @Param("cancelAmount") String cancelAmount, 
			       @Param("cancelStatus")String cancelStatus, 
			       @Param("cancelReason")String cancelReason
			       );
	
	@Insert("insert into t_hmct_refnd ("
    		+ "refund_no, cancel_no, refund_status, refund_amount, refund_date, refund_bank, refund_account, refund_name"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.refund_no), 0) + 1 FROM t_hmct_refnd A), #{cancelNo}, #{refundStatus}, #{refundAmount}, now(), #{refundBank}, #{refundAccount}, #{refundName} )")
	void addRefund(@Param ("refundNo")int refundNo,
			       @Param ("cancelNo") int cancelNo,
			       @Param("refundStatus") String refundStatus,
			       @Param("refundAmount") String refundAmount, 
			       @Param("refundBank") String refundBank, 
			       @Param("refundAccount")String refundAccount, 
			       @Param("refundName")String refundName
			       );

}
