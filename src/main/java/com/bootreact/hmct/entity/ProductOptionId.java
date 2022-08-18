package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class ProductOptionId implements Serializable{
    private int product;
    private String common;
}
