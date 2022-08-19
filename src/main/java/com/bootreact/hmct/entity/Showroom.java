package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_SHOWROOM")
@Data
@DynamicInsert
public class Showroom {
	//쇼룸 번호(PK)
	@Id
	private int showroomNo;
	
	//쇼룸 색상
	@Column(nullable = false)
	private String showroomColor;
	
	//쇼룸 이미지명
	@Column(nullable = false)
	private String showroomImgName;
	
	//쇼룸 이미지명 원본명
	@Column(nullable = false)
	private String showroomImgOriginalName;
	
}
