package com.bootreact.hmct.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.User;

public interface UserRepository extends JpaRepository<User, String>{

	User findByUserId(String userId);

//	void findByUserName(String userName);
}
