package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCT_PRODUCT_IMAGE")
@Data
@DynamicInsert
@DynamicUpdate

public class ProductImage {
	
@Column(nullable = false)	
private String productImageNo;

@Column(nullable = false)
private String productImageName;

@Column(nullable = false)
private String productImageType;

@Column(nullable = false)
private String productImagePath;

}
