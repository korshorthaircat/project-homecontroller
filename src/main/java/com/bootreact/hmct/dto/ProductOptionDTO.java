package com.bootreact.hmct.dto;


import com.bootreact.hmct.entity.Common;
import com.bootreact.hmct.entity.Product;

import lombok.Data;

@Data
public class ProductOptionDTO {
	
	private Product product;
	private Common common;
	private String productInventory;
}


