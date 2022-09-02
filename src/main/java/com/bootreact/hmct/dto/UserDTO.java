package com.bootreact.hmct.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserDTO {
	
	private String userId;
	private String userPw;
	private String userName;
	private String userNickname;
	private String userTel;
	private String userMail;
	private String userRole;
	private String userZip;
	private String userAddr;
	private String userAddrDetail;
	private int userPoint;
	private LocalDate userJoinYmd;
	private String userMarketing;
	
	private String token;
}
