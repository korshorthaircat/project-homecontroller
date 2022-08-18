package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_CART")
@Data
@DynamicInsert
@IdClass(CartId.class)
public class Cart {
	
	//아이디(PK, FK)
	@Id
	@ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;
    
    //제품 번호(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="PRODUCT_NO")
	private Product product;
	
	//코드(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="COMMON_CODE")
	private Common common;
	
	//제품 수량
	@ColumnDefault("'1'")
	private String productCount;
    
}
