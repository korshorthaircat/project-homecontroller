package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class WishItemId implements Serializable {
	
	private String user;
	private int product;

}
