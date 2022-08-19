package com.bootreact.hmct.service.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.repository.UserRepository;
import com.bootreact.hmct.service.user.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public User join(User user) {
		//User 유효성 검사
		if(user == null || user.getUserId() == null) {
			throw new RuntimeException("Invalid Argument");
		}
		
		//userNickname 중복체크 
//		if(userRepository.existsByUsername(user.getUserNickname())) {
//			throw new RuntimeException("userNickname already exists");
//		}
		
		//userMail 중복체크 
		
		return userRepository.save(user);
	}

	@Override
	public User login(String userName, String password) {

		User loginUser = userRepository.findByUserName(userName);
		
		if(loginUser != null && passwordEncoder.matches(password, loginUser.getUserPw())) {
			return loginUser;
		} else {
			return null;
		}
	}

}
