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
@Table(name="T_HMCT_WISHITEM")
@Data
@IdClass(WishItemId.class)
public class WishItem {

   //회원 아이디(PK, FK)
   @Id
   @ManyToOne
   @JoinColumn(name="USER_ID")
   private User user;
   
   //제품 번호(PK, FK)
   @Id
   @ManyToOne
   @JoinColumn(name="PRODUCT_NO")
   private Product product;
}