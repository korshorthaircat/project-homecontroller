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
	
	@Select("SELECT IFNULL(MAX(retun_no), 0) + 1 FROM t_hmct_retun")
	int createRetunNo();
	
	@Select("SELECT IFNULL(MAX(exchange_no), 0) + 1 FROM t_hmct_exchn")
	int createExchangeNo();
	
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
	
	@Insert("insert into t_hmct_retun ("
    		+ "retun_no, order_no, retun_amount, retun_rgsdate, retun_state, retun_reason"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.retun_no), 0) + 1 FROM t_hmct_retun A), #{orderNo},  #{retunAmount}, now(), #{retunState}, #{retunReason} )")
	void addRetun(@Param ("retunNo")int retunNo,
			       @Param ("orderNo") int orderNo,
			       @Param("retunAmount") String retunAmount, 
			       @Param("retunState")String retunState, 
			       @Param("retunReason")String retunReason
			       );
	
	@Insert("insert into t_hmct_refnd ("
    		+ "refund_no, retun_no, refund_status, refund_amount, refund_date, refund_bank, refund_account, refund_name"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.refund_no), 0) + 1 FROM t_hmct_refnd A), #{retunNo}, #{refundStatus}, #{refundAmount2}, now(), #{refundBank2}, #{refundAccount2}, #{refundName2} )")
	void addRefundsc(@Param ("refundNo")int refundNo,
			       @Param ("retunNo") int retunNo,
			       @Param("refundStatus") String refundStatus,
			       @Param("refundAmount2") String refundAmount, 
			       @Param("refundBank2") String refundBank, 
			       @Param("refundAccount2")String refundAccount, 
			       @Param("refundName2")String refundName
			       );
	
	@Insert("insert into t_hmct_exchn ("
    		+ "exchange_no, order_no, exchange_rgsdate, exchange_status, exchange_reason"
    		+ ") values ("
    		+ "(SELECT IFNULL(MAX(A.exchange_no), 0) + 1 FROM t_hmct_exchn A), #{orderNo}, now(), #{exchangeStatus}, #{exchangeReason} )")
	void addExchange(@Param ("exchangeNo")int exchangeNo,
			       @Param ("orderNo") int orderNo,
			       @Param("exchangeStatus")String exchangeStatus, 
			       @Param("exchangeReason")String exchangeReason
			       );

}
