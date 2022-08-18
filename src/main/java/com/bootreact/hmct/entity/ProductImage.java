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
@Table(name="T_HMCT_PRODUCT_IMAGE")
@Data
@DynamicInsert
@IdClass(ProductImageId.class)
public class ProductImage {
		
	//제품 이미지 번호(PK)
	@Id
	private int productImageNo;
	
	//제품 번호(PK, FK)
	@Id
	@JoinColumn(name="PRODUCT_NO")
	@ManyToOne
	private Product product;
	
	//제품 이미지 명
	@Column(nullable = false)
	private String productImageName;
	
	//이미지 파일 유형
	@Column(nullable = false)
	private String productImageType;
	
	//이미지 파일 경로
	@Column(nullable = false)
	private String productImagePath;

}
