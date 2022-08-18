package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCT_SHOWROOM")
@Data
@DynamicInsert
@DynamicUpdate
public class Showroom {
	@Id
	@Column(nullable = false)
	private String showroomNo;
	
	@Column(nullable = false)
	private String showroomColor;
	
	@Column(nullable = false)
	private String showroomImgName;
	
	@Column(nullable = false)
	private String showroomImgOriginalName;
	
}
