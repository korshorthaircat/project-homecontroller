package com.bootreact.hmct.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

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
	
	List<Map<String, Object>> getProductWithCommonCode(Map<String, Object> paramMap);

	List<Map<String, Object>> getAdminProductList();
	
	//제품번호를 이용해서 대표컬러(커먼코드) 1개 가져오기
		String getRepresentativeCommonCode(int productNo);

	//제품번호를 이용해서 대표이미지 가져오기
	List<Map<String, Object>> getRepresentativeImage(int productNo);

	List<Map<String, Object>> getProductListByFilter(Map<String, String> paramMap);

	List<Map<String, Object>> getProductImageListByFilter(Map<String, String> paramMap);

	List<Map<String, Object>> getAllProductList();

	List<Map<String, Object>> getAllProductImageList();

	//List<Map<String, Object>> getSearchProducts();
	
	int getOrderHistory(@Param("productNo") int productNo, @Param("userId") String userId);
	
	List<Integer> getOrderNoListByProductNo(@Param("productNo") int productNo, @Param("userId") String userId);
	
	List<String> getCommonCodeListByProductNo(@Param("productNo") int productNo, @Param("userId") String userId);

	List<Map<String, Object>> getSearchProducts(String word);
	
	List<Map<String, Object>> getSearchProductImageList(Map<String, Object> paramMap);

	List<Map<String, Object>> getProductCategoryList(String code);

	@Select("select product_inventory from t_hmct_product_optn where product_no = #{productNo} and common_code = #{commonCode}")
	int getProductInventory(@Param("productNo") int productNo,
							@Param("commonCode")String commonCode);

	@Update("update t_hmct_product_optn "
			+ " set product_inventory = product_inventory - #{productCount}"
			+ " where product_no = #{productNo} and common_code = #{commonCode}")
	void updateProductOptionByOrder(@Param("productNo") int productNo, 
									@Param("productCount") int productCount, 
									@Param("commonCode") String commonCode);



}		
