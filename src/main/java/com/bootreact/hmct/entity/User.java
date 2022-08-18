package com.bootreact.hmct.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name="T_HMCT_USER")
@Data
@DynamicInsert //@DynamicInsert는 컬럼의 지정된 default 값을 적용시키며 INSERT할 때 사용
public class User {
	
	//아이디
	@Id
	@Column(nullable = false)
	private String userId;
	
	//비밀번호 
	@Column(nullable = false)
	private String userPw;  
	//이름 
	@Column(nullable = false)
	private String userName;
	
	//닉네임
	@Column(nullable = false)
	private String userNickname;
	
	//전화번호 
	@Column(nullable = false)
	private String userTel;
	
	//이메일
	@Column(nullable = false)
	private String userMail;
	
	//권한
	@ColumnDefault("'ROLE_USER'")
	private String userRole;
	
	//우편번호
	@Column(nullable = false)
	private String userZip;
	
	//주소
	@Column(nullable = false)
	private String userAddr;
	
	//세부주소
	@Column(nullable = false)
	private String userAddrDetail;
	
	//포인트
	@Column(nullable = false)
	private String userPoint;
	
	//가입일
	@Column(nullable = false)
	private String userJoinYmd;
	
	//마케팅 동의
	@Column(nullable = false)
	private String userMarketing;
}
