package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data	
public class ShowroomItemId implements Serializable{
    private int showroom;
    private int product;
}
