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
@Table(name="T_HMCT_WISHSHOWROOM")
@Data
@DynamicInsert
@IdClass(WishShowroomId.class)
public class WishShowroom {
	
	//아이디(PK, FK)
	@Id
	@ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;
    
    //제품 번호(PK, FK)
	@Id
	@ManyToOne
	@JoinColumn(name="SHOWROOM_NO")
	private Showroom showroom;
}
