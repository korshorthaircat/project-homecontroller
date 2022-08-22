package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class WishShowroomId implements Serializable{
    private static final long serialVersionUID = 8168165483519663540L;
    
	private String user;
    private int showroom;
} 
