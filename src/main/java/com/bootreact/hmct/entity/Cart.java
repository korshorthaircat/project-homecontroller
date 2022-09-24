package com.bootreact.hmct.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCT_CART")
@Data
@DynamicInsert
@DynamicUpdate
@IdClass(CartId.class)
public class Cart {
	
	//아이디(PK, FK)
	@Id
	@ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;
	
	//제품옵션(PK, FK)
	@Id
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name = "PRODUCT_NO", referencedColumnName="PRODUCT_NO"),
		@JoinColumn(name = "COMMON_CODE", referencedColumnName="COMMON_CODE")
	})
	private ProductOption productOption;
	  
	//제품 수량
	@ColumnDefault("1")
	private int productCount;
	
	
    
}
