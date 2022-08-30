package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name = "T_HMCT_PRODUCT")
@Data
@DynamicInsert
@DynamicUpdate
@SequenceGenerator(
		name = "PRODUCT_NO_GENERATOR",
		sequenceName = "PRODUCT_NO_SEQ",
		initialValue=1,
		allocationSize=1
		)
public class Product {

	//제품번호
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE,
					generator = "PRODUCT_NO_GENERATOR")
	private int productNo;

	//제품명
	@Column(nullable = false)
	private String productName;

	//제품판매상태
	@Column(nullable = false)
	private String productState;

	//제품사이즈
	@Column(nullable = false)
	private String productSize;
	
	//제품등록일
	@Column(nullable = false)
	private LocalDateTime productRgsde = LocalDateTime.now();

	//제품수정일
	@Column(nullable = false)
	private LocalDateTime productUpdde = LocalDateTime.now();

	//제품가격
	@Column(nullable = false)
	private int productPrice;

	//제품설명_요약
	@Column(nullable = false) 
	private String productSummary;

	//제품설명_상세
	@Column(nullable = false, columnDefinition = "varchar(2000)")
	private String productDetail;

	//제품설명_참고
	@Column(nullable = false, columnDefinition = "varchar(2000)")
	private String productRef;

	//제품설명_소재 및 관리
	@Column(nullable = false, columnDefinition = "varchar(2000)")
	private String productMng;

	//제품설명_안전 및 규정준수
	@Column(nullable = false, columnDefinition = "varchar(2000)")
	private String productSafe;

	//제품 배송시 주의사항
	@Column(nullable = false, columnDefinition = "varchar(2000)")
	private String productDeliveryInfo;

	//제품재고량
	@Column(nullable = false)
	private String productInvntry;

	//치수
	@Column(nullable = false)
	private String productGauge;

	//제품소재
	@Column(nullable = false)
	private String productMaterial;

	//제품 카테고리
	@Column(nullable = false)
	private String productCategory;

}
