package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCM_COMMON")
@Data
@DynamicInsert
@DynamicUpdate
public class Common {
	
	@Id
	@Column(nullable = false)
	private String commonCode;
	
	@Column(nullable = false)
	private String commonType;
	
	@Column(nullable = false)
	private String commonCodeName;

}
