package com.bootreact.hmct.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ProductMapper {
	@Select("SELECT IFNULL(MAX(PRODUCT_IMAGE_NO), 0) + 1 FROM T_HMCT_PRODUCT_IMAGE WHERE PRODUCT_NO = #{productNo}")
	int getNextProductImageNo(int productNo);
	
	List<Map<String, Object>> getMainProductList();
	
	List<Map<String, Object>> getMainProductImageList();


	@Insert("insert into t_hmct_product_optn ("
			+ "common_code, product_no, product_inventory"
			+ ") values ("
			+ "#{commonCode}, #{productNo}, #{productInventory})")
	void addOption(@Param("productNo") int productNo, 
				   @Param("commonCode") String optionCommonCode, 
				   @Param("productInventory") int optionInventory);

	List<Map<String, Object>> getProduct(int productNo);

	List<Map<String, Object>> getProductImage(int productNo);
	
	List<Map<String, Object>> getProductWithCommonCode(Map paramMap);

	List<Map<String, Object>> getAdminProductList();
	
	//제품번호를 이용해서 대표컬러(커먼코드) 1개 가져오기
		String getRepresentativeCommonCode(int productNo);


	List<Map<String, Object>> getRepresentativeImage(int productNo);

}		
