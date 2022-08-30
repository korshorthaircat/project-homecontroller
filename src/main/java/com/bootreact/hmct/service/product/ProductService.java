package com.bootreact.hmct.service.product;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Product;


@Service
public interface ProductService {
	List<Product> insertProduct(String product);
	
	void insertProduct(Product product);
	
	void deleteProduct(Product product);
	
	void updateProduct(Product product);
	
	

}
