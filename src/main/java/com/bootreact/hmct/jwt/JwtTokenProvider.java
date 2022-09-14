package com.bootreact.hmct.jwt;

import java.nio.charset.StandardCharsets;


import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.springframework.stereotype.Component;

import com.bootreact.hmct.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
//사용자 정보를 받아서 JWT 생성해주는 역할
public class JwtTokenProvider {
	//서명부분에서 유효성 검사에 사용될 키
		private static final String SECRET_KEY = "Yml0Y2FtcDIyMnJlYWN0c3ByaW5nYm9vdGFwcA==";
		Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
		
		/*
		 * 사용자 정보를 받아서 JWT 생성
		 * JSON 문자열을 base64인코딩하고 뒷부분에 문자열을 서버에 있는 SECRET_KEY Hashing 하여 추가
		 * */
		public String create(User user) {
			//토큰 만료일 설정. 현재로부터 1일뒤로 설정
			Date expiryDate = Date.from(Instant.now().plus(1, ChronoUnit.DAYS));
			
			//JWT 생성
			return Jwts.builder()
					//header에 들어갈 내용 및 서명을 위한 SCERET_KEY
					.signWith(key, SignatureAlgorithm.HS256)
					//payload에 들어갈 내용
					//토큰의 주체
					.setSubject(user.getUserId()) //sub
					//토큰 발행 주체
					.setIssuer("todo app") //iss
					//토큰 발행 일자
					.setIssuedAt(new Date()) //isa
					//토큰 만료 일자
					.setExpiration(expiryDate) //exp
					.compact();
		}
		
		//토큰을 받아와서 토큰의 유효성 확인(위조여부 확인)하고 우리가 원하는 sub, 즉 사용자의 아이디 리턴
		//(라이브러리 덕분에 우리가 굳이 JSON을 생성, 서명, 인코딩, 디코딩, 파싱하는 작업을 하지 않아도 됨)
		public String validateAndGetUsername(String token) {
			//SECRET_KEY를 이용하여 서명을 만들고 받아온 JWT의 서명과 비교
			
			//parseClaimsJws메서드가 Base64로 디코딩 및 파싱
			//헤더와 페이로드를 setSigningKey로 넘어온 시크릿을 이용해 서명한 후 token의 서명과 비교
			
			//위조되지 않았다면 페이로드(Claims) 리턴, 위조라면 예외를 날림.
			//그 중 우리는 username이 필요하므로 getBody를 부름. 
			
			Claims claims = Jwts.parserBuilder()
					.setSigningKey(SECRET_KEY.getBytes())
					.build()
					.parseClaimsJws(token)
					.getBody();
			
			//일치하면 토큰의 주체 즉 username 리턴
			return claims.getSubject();
		}
}
