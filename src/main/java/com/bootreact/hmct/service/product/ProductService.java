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

	void updateProduct(Product product);
	
	Product findbyProductNo(int productNo);
	
	void deleteProduct(Product product);
	
	List<Map<String, Object>> getMainProductList();
	
	List<Map<String, Object>> getMainProductImageList();

	//관리자 상품관리>상품조회 페이지에서 제품 옵션 추가하기 
	void addOption(int productNo, String optionCommonCode, int optionInventory);

	//제품번호로 제품 하나의 상세정보 받아오기
	List<Map<String, Object>> getProduct(int productNo);

	//제품번호로 제품 하나의 이미지들 받아오기
	List<Map<String, Object>> getProductImage(int productNo);

	//제품번호, 커먼코드로 제품 하나의 이미지들 받아오기(
	List<Map<String, Object>> getProductWithCommonCode(Map paramMap);
	
	//관리자 페이지에서 제품 전체 목록 가져오기
	List<Map<String, Object>> getAdminProductList();

	//제품번호를 이용해서 대표컬러(커먼코드) 1개 가져오기
	String getRepresentativeCommonCode(int productNo);

	//제품번호 이용해서 컬러별 대표사진 1개씩 가져오기
	List<Map<String, Object>> getRepresentativeImage(int productNo);

}


