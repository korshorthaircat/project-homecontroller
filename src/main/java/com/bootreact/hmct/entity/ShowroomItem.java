package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="T_HMCT_SHOWROOM_ITEM")
@Data
@IdClass(ShowroomItemId.class)
public class ShowroomItem {

	//제품 번호(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="PRODUCT_NO")
	private Product product;
	
	//쇼룸번호(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="SHOWROOM_NO")
	private Showroom showroom;
	
	//제품위치Left
	@Column
	private String productLocationLeft;
	
	//제품위치Top
	@Column
	private String productLocationTop;
	
}
