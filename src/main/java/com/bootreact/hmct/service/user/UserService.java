package com.bootreact.hmct.service.user;

import com.bootreact.hmct.entity.User;

public interface UserService {

	User join(User user);
	
	User login(String username, String password);
}
