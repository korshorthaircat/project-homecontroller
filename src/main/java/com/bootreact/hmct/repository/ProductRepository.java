package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

//	List<Product> findByProductNo(int productNo);
	
	Product findByProductNo(int productNo);
	

}
