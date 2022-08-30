package com.bootreact.hmct.service.product;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductImage;


@Service
public interface ProductService {
	List<Product> getProductList(int productNo);
	
	int insertProduct(Product product);
	
	void insertProductFiles(List<ProductImage> fileList);
	
//	void deleteProduct(Product product);
//	
//	void updateProduct(Product product);

}
