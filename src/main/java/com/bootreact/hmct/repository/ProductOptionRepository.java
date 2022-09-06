package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductOption;
import com.bootreact.hmct.entity.ProductOptionId;

public interface ProductOptionRepository extends JpaRepository<ProductOption, ProductOptionId>{


}
