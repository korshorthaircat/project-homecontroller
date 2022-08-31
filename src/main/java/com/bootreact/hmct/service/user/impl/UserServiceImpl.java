package com.bootreact.hmct.service.user.impl;

import java.util.List;

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
	public User login(String userId, String password) {

		User loginUser = userRepository.findByUserId(userId);
		
		if(loginUser != null && passwordEncoder.matches(password, loginUser.getUserPw())) {
			return loginUser;
		} else {
			return null;
		}
	}
	
	@Override
	public List<User> getUserList(){
		return userRepository.findAll();
	}
	
	@Override
	public void deleteUser(User user) {
		userRepository.delete(user);
		
	}
	
	@Override
	public void updateUser(User user) {
		userRepository.save(user);
	}

	@Override
	public User checkId(String userId) {
		if(userRepository.findById(userId).isPresent()) {
			return userRepository.findById(userId).get();
		} else {
			return null;
		}
	}
//	
//	@Override
//	public User getUser(User user)

}
