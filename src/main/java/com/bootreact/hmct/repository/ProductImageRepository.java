package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.ProductImage;
import com.bootreact.hmct.entity.ProductImageId;

public interface ProductImageRepository extends JpaRepository<ProductImage, ProductImageId>{

}
