package com.bootreact.hmct.dto;

import lombok.Data;

@Data
public class WishListDTO {
	
	private String userId;
	private String productNum;
	private String productName;
	private String productPrice;
	private String showroomNo;
	

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getProductNum() {
		return productNum;
	}

	public void setProductNum(String productNum) {
		this.productNum = productNum;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(String productPrice) {
		this.productPrice = productPrice;
	}

	public String getShowroomNo() {
		return showroomNo;
	}

	public void setShowroomNo(String showroomNo) {
		this.showroomNo = showroomNo;
	}
	
}
