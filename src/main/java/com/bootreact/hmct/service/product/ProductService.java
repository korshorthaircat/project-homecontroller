package com.bootreact.hmct.service.product;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductImage;
import com.bootreact.hmct.entity.ProductOption;
import com.bootreact.hmct.entity.Showroom;


@Service
public interface ProductService {
	List<Product> getProductList();
	
	int insertProduct(Product product);
	
	void insertProductFiles(List<ProductImage> fileList);
	
	void insertProductOption(ProductOption productOption);
	
//	void deleteProduct(Product product);

	void updateProduct(Product product);
	
	Product findbyProductNo(int productNo);
	
	void deleteProduct(Product product);
	
	List<Map<String, Object>> getMainProductList();
	
	List<Map<String, Object>> getMainProductImageList();

	void addOption(int productNo, String optionCommonCode, int optionInventory);


	//제품번호로 제품 하나의 상세정보 받아오기
	List<Map<String, Object>> getProduct(int productNo);

	//제품번호로 제품 하나의 이미지들 받아오기
	List<Map<String, Object>> getProductImage(int productNo);

}


