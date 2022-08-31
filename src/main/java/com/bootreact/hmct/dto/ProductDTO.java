package com.bootreact.hmct.dto;

import java.time.LocalDateTime;


import lombok.Data;

@Data
public class ProductDTO {

		private int productNo;
		private String productName;
		private String productState;
		private String productSize;
		private LocalDateTime productRgsde;
		private LocalDateTime productUpdde;
		private int productPrice;
		private String productSummary;
		private String productDetail;
		private String productRef;
		private String productMng;
		private String productSafe;
		private String productDeliveryinfo;
		private String productGauge;
		private String productMaterial;
		private String productCategory;


}
