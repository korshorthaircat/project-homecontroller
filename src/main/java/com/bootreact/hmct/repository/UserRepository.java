package com.bootreact.hmct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootreact.hmct.entity.User;

public interface UserRepository extends JpaRepository<User, String>{

	User findByUserName(String userName);

	

}
