package com.bootreact.hmct.controller.wish;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.service.wish.impl.WishServiceImpl;

@RestController
@RequestMapping("/wish")
public class WishController {

	@Autowired
    WishServiceImpl wishService;
//  위시아이템 추가 
// 	위시컨트롤러에 상세페이지 url을 설정하는것 
//	@PostMapping("/add")
//  void addWishItem(Product product) {}
	
//	void addWishItem(@RequestParam String userId , @RequestParam int productId) {
//		wishService.addProduct(userId,productId);
//	}
	
	
//	@RequestMapping("/getone")
//	@ResponseBody
//	public Product responseBodyTest(@RequestParam Map<String, Object> params, HttpServletRequest request){
//	    String id = params.get("userId").toString();
//	    Integer product = Integer.parseInt(params.get("productId").toString());
//	    Product w = wishService.getall(product);
//		
//	    return w;
//	}

//    
//    //위시아이템 삭제 
//    void deleteWishItem(Product product) {}
//    
//    //위시아이템 조회 
//    void getWishItemList(Product product) {}
//    
//    //위시쇼룸 추가 
//    void addWishShowroom(Product product) {}
//    
//    //위시쇼룸 삭제 
//    void deleteWishShowroom(Product product){}
//    
//    //위시쇼룸 조회 
//    void getWishShowroomList(Product product) {}
}
