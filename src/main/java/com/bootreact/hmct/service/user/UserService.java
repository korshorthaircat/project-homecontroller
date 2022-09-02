package com.bootreact.hmct.service.user;

import java.util.List;

import com.bootreact.hmct.entity.User;

public interface UserService {
	List<User> getUserList();

	User join(User user);
	
	User login(String userId, String userPw);

	void deleteUser(User user);
	
	void updateUser(User user);
	
//	void viewUser(String userName);

	User checkId(String userId);
          
	User findbyUserId(String userId);
}
