package com.bootreact.hmct.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_REVIEW")
@Data
@DynamicInsert
@IdClass(ReviewId.class)
public class Review {
    //리뷰 번호(PK)
	@Id
	private int reviewNo;
	
	//주문 번호(PK, FK)
	@Id
	@JoinColumn(name="ORDER_NO")
	@OneToOne
	private Order order;
	
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
