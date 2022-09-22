package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_REVIEW")
@Data
@DynamicInsert
public class Review {
    //리뷰 번호(PK)
	@Id
	private int reviewNo;
	
	//주문 번호(PK, FK)
//	@JoinColumn(name="ORDER_NO")
//	@OneToOne
//	private Order order;
//
//	@Id
//	@ManyToOne
//	@JoinColumn(name="PRODUCT_NO")
//	private Product product;
	
	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;
	
//	@OneToOne
	@JoinColumns({
		@JoinColumn(name = "PRODUCT_NO", referencedColumnName="PRODUCT_NO"),
		@JoinColumn(name = "COMMON_CODE", referencedColumnName="COMMON_CODE")
		
	})
	@Column(nullable=false)
	private int productNo;
	@Column(nullable=false)
	private String commonCode;
	
	//리뷰 제목
	@Column(nullable=false)
	private String reviewTitle;
	
	//리뷰 날짜
	private LocalDateTime reviewRegdate = LocalDateTime.now();
	
	//점수 부여
	@Column(nullable=false)
	private String reviewGrade;
	
	//리뷰 내용
	@Column(nullable=false)
	private String reviewContent;


}
