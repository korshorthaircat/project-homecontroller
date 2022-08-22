package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class WishItemId implements Serializable {
	
	private static final long serialVersionUID = 5236694231444162181L;
	private String user;
	private int product;

}
