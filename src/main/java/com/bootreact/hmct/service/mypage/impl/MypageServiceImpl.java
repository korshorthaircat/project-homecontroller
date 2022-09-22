package com.bootreact.hmct.service.mypage.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.bootreact.hmct.entity.ChangePw;

@Service
public class MypageServiceImpl implements MypageService{
	
    @Autowired
    OrderRepository orderRepository;
    
    @Autowired
    private OrderMapper orderMapper;
    
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public List<Order> getMyOrderList() {
		return orderRepository.findAll();
	}

	
	
	@Autowired
	private UserRepository userRepository;
	
	//비밀번호 변경 
	public Map<String, Object> ChangePw(ChangePw prm) {
		Map<String, Object> result = new HashMap<String, Object>();
		User user = userRepository.findByUserId(prm.getUserId());
		
		System.out.println(prm.getChgPw());
		boolean isPwCorrect = passwordEncoder.matches(prm.getUserPw(), user.getUserPw());
		//String encInputUserPw = passwordEncoder.encode(prm.getUserPw());
		
		if(!isPwCorrect) {
			result.put("msg", "현재 비밀번호가 일치하지 않습니다.");
			return result;
		}
		
		String newPassword = passwordEncoder.encode(prm.getChgPw());
		user.setUserPw(newPassword);
		userRepository.save(user);
		result.put("mag", "됐다!");
		return result;
	}

};
