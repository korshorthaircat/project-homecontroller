package com.bootreact.hmct.dto;

import java.util.List;
import java.util.Map;

import lombok.Data;


//다양한 객체를 리턴하기 위해 제네릭 설정 
@Data
public class ResponseDTO<T> {

	private String error;
	
	private List<T> data;
			
	
}
