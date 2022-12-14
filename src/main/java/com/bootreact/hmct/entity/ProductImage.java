package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_PRODUCT_IMAGE")
@Data
@DynamicInsert
@IdClass(ProductImageId.class)
public class ProductImage {
		
	//제품 이미지 번호(PK)
	@Id
	private int productImageNo;
	
	//제품옵션(PK, FK)
	@Id
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name = "PRODUCT_NO", referencedColumnName="PRODUCT_NO"),
		@JoinColumn(name = "COMMON_CODE", referencedColumnName="COMMON_CODE")
	})
	private ProductOption productOption;
	
	//제품 이미지 명
	@Column(nullable = false)
	private String productImageName;
	
	//이미지 파일 유형
	@Column
	private String productImageType;
	
	//이미지 파일 경로
	@Column(nullable = false)
	private String productImagePath;

}
