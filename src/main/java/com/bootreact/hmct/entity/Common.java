package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCT_COMMON")
@Data
@DynamicInsert
public class Common {
	
	//코드(PK)
	@Id
	private String commonCode;
	
	//코드유형(A: 색상, B: 소재, C: 카테고리)
	private String commonType;
	
	//코드명
	@Column(nullable = false)
	private String commonCodeName;

}
