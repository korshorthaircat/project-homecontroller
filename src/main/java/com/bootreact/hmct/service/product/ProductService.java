package com.bootreact.hmct.service.product;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductImage;
import com.bootreact.hmct.entity.ProductOption;


@Service
public interface ProductService {
	List<Product> getProductList();
	
	int insertProduct(Product product);
	
	void insertProductFiles(List<ProductImage> fileList);
	
	void insertProductOption(ProductOption productOption);
	
//	void deleteProduct(Product product);
//	
//	void updateProduct(Product product);

}
