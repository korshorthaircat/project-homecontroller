package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_HMCM_PRODUCT_OPTN")
@Data
@DynamicInsert
@DynamicUpdate
public class ProductOption {

	@Column(nullable = false)
	private String productInventory;
}
