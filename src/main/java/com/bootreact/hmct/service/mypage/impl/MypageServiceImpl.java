package com.bootreact.hmct.service.mypage.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Order;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.mapper.OrderMapper;
import com.bootreact.hmct.repository.OrderRepository;
import com.bootreact.hmct.repository.UserRepository;
import com.bootreact.hmct.service.mypage.MypageService;
import com.bootreact.hmct.service.user.UserService;

@Service
public class MypageServiceImpl implements MypageService{
	
    @Autowired
    OrderRepository orderRepository;
    
    @Autowired
    private OrderMapper orderMapper;

	@Override
	public List<Order> getMyOrderList() {
		return orderRepository.findAll();
	}
	
	
	
	
	//비밀번호 변경 
//		@Autowired
//		UserRepository userRepository;
//		
//		@Autowired
//		private PasswordEncoder passwordEncoder;
//		
//		@Override
//		public void changePw(User user) {
//			User oldUser = userRepository.findByUserId(userId);
//			
//			if(oldUser != null && passwordEncoder.matches(password, oldUser.getUserPw())) {
//				return userRepository.save(userPw);
//			
//			} else {
//				
//			}return ;
//		}
	
//	@Override
//	public User login(String userId, String password) {
//
//		User loginUser = userRepository.findByUserId(userId);
//		
//		if(loginUser != null && passwordEncoder.matches(password, loginUser.getUserPw())) {
//			return loginUser;
//		} else {
//			return null;
//		}

	
}
