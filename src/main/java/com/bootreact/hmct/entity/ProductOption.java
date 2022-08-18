package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCM_PRODUCT_OPTN")
@Data
@DynamicInsert
@IdClass(ProductOptionId.class)
public class ProductOption {
   
	//제품 번호(PK, FK)
	@Id
	@JoinColumn(name="PRODUCT_NO")
	@ManyToOne
	private Product product;
	
	//코드(PK, FK)
	@Id
	@JoinColumn(name="COMMON_CODE")
	@ManyToOne
	private Common common;
	
	//재품 재고량
	@Column(nullable = false)
	private String productInventory;
}
