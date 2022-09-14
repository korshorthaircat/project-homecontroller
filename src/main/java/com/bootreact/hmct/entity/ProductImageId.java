package com.bootreact.hmct.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class ProductImageId implements Serializable{
    private int productImageNo;
 	private ProductOptionId productOption;
}
