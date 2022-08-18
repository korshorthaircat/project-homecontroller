package com.bootreact.hmct.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
	
	private final long MAX_AGE_SECS = 3600; //API 요청 타임아웃 시간 3600초로 설정

	@Override
	public void addCorsMappings(CorsRegistry registry) {  
		registry.addMapping("/**") //모든 요청에 대한 예외사항 등록 
				.allowedOrigins("http://localhost:3000") //예외로 등록될 요청 주소
				.allowedMethods("GET", "POST", "PUT", "DELETE") //허용될 요청 방식 등록
				.allowedHeaders("*") //허용될 요청 헤더
				.allowCredentials(true) //인증에 관한 정보 허용
				.maxAge(MAX_AGE_SECS);//타임아웃 시간 설정 
	
	}
}
