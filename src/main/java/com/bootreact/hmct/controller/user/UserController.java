package com.bootreact.hmct.controller.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bootreact.hmct.dto.ResponseDTO;
import com.bootreact.hmct.dto.UserDTO;
import com.bootreact.hmct.entity.User;
import com.bootreact.hmct.jwt.JwtTokenProvider;
import com.bootreact.hmct.service.user.UserService;

@RestController //@Controller와 @ResponseBody 두 어노테이션의 조합.
//@Controller - @Component로 스프링이 이 클래스의 오브젝트를 알아서 생성하고 다른 오브젝트들과 의존성을 연결한다는 뜻 
//@ResponseBody - 이 클래스의 메서드가 리턴하는 것은 웹서비스의 ResponseBody라는 뜻.
//다시 말해 메서드가 리턴할 때 스프링은 리턴된 오브젝트를 JSON의 형태로 바꾸고, HttpResponse에 담아 반환한다는 뜻이다. 
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	//회원 등록  (회원가입)
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody User user) {
		try {
			user.setUserPw(passwordEncoder.encode(user.getUserPw()));
			
			//회원가입 후 가입된 회원 정보 받아오는 객체 생성
			User joinUser = userService.join(user);
			//리액트로 리턴해줄 UserDTO 객체 생성
			UserDTO userDTO = new UserDTO();
			
			//user는 리스트로 리턴되는게 아니여서 바로 responseBody에 userDTO를 담아 리턴
			userDTO.setUserId(joinUser.getUserId());
			userDTO.setUserName(joinUser.getUserName());
			userDTO.setUserNickname(joinUser.getUserNickname());
			userDTO.setUserTel(joinUser.getUserTel());
			userDTO.setUserMail(joinUser.getUserMail());
			userDTO.setUserRole(joinUser.getUserRole());
			userDTO.setUserZip(joinUser.getUserZip());
			userDTO.setUserAddr(joinUser.getUserAddr());
			userDTO.setUserAddrDetail(joinUser.getUserAddrDetail());
			userDTO.setUserPoint(joinUser.getUserPoint());
			userDTO.setUserMarketing(joinUser.getUserMarketing());
			
			return ResponseEntity.ok().body(userDTO);
			//ResponseEntity는 HTTP 응답의 바디뿐만 아니라 여러 다른 매개변수들(예를들어 status, header)을 조작하고 싶을 때 사용함
			//우리가 작성할 컨트롤러는 대부분 ResponseEntity를 반환할 예정.
			
		} catch(Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	//회원 정보 조회  
    @GetMapping("/getUserList")
    public ResponseEntity<?> getUserList(@AuthenticationPrincipal String userName){
    	try {
    		List<User> userList = userService.getUserList(userName);
    		
    		List<UserDTO> userDTOList = new ArrayList<UserDTO>();
    		
    		for(User t: userList) {
    			UserDTO userDTO = new UserDTO();
    			userDTO.setUserId(t.getUserId());
    			userDTO.setUserName(t.getUserName());
    			userDTO.setUserNickname(t.getUserNickname());
    			userDTO.setUserTel(t.getUserTel());
    			userDTO.setUserMail(t.getUserMail());
    			userDTO.setUserRole(t.getUserRole());
    			userDTO.setUserZip(t.getUserZip());
    			userDTO.setUserAddr(t.getUserAddr());
    			userDTO.setUserAddrDetail(t.getUserAddrDetail());
    			userDTO.setUserPoint(t.getUserPoint());
    			userDTO.setUserMarketing(t.getUserMarketing());
    			
    			userDTOList.add(userDTO);	
    		}
    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
    		
    		response.setData(userDTOList);
    		
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
    };
    
    //회원 삭제
    @DeleteMapping("/deleteAdminUser")
    public ResponseEntity<?> deleteUser(@RequestBody User user, String userName){
    	try {
    		user.setUserName(userName);
    		
    		userService.deleteUser(user);
    		
    		List<User> userList = userService.getUserList(userName);
    		
    		List<UserDTO> userDTOList = new ArrayList<UserDTO>();
    		
    		for(User t: userList) {
    			UserDTO userDTO = new UserDTO();
    			userDTO.setUserId(t.getUserId());
    			userDTO.setUserName(t.getUserName());
    			userDTO.setUserNickname(t.getUserNickname());
    			userDTO.setUserTel(t.getUserTel());
    			userDTO.setUserMail(t.getUserMail());
    			userDTO.setUserRole(t.getUserRole());
    			userDTO.setUserZip(t.getUserZip());
    			userDTO.setUserAddr(t.getUserAddr());
    			userDTO.setUserAddrDetail(t.getUserAddrDetail());
    			userDTO.setUserPoint(t.getUserPoint());
    			userDTO.setUserMarketing(t.getUserMarketing());
    			
    			userDTOList.add(userDTO);	
    		}
    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
    		
    		response.setData(userDTOList);
    		
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
    };
    
    
    //회원정보 수정
    @PutMapping("/updateAdminUser")
    public ResponseEntity<?> updateUser(@RequestBody User user, String userName){
    	try {
    		user.setUserId(userName);
    		
    		userService.deleteUser(user);
    		
    		List<User> userList = userService.getUserList(userName);
    		
    		List<UserDTO> userDTOList = new ArrayList<UserDTO>();
    		
    		for(User t: userList) {
    			UserDTO userDTO = new UserDTO();
    			userDTO.setUserId(t.getUserId());
    			userDTO.setUserName(t.getUserName());
    			userDTO.setUserNickname(t.getUserNickname());
    			userDTO.setUserTel(t.getUserTel());
    			userDTO.setUserMail(t.getUserMail());
    			userDTO.setUserRole(t.getUserRole());
    			userDTO.setUserZip(t.getUserZip());
    			userDTO.setUserAddr(t.getUserAddr());
    			userDTO.setUserAddrDetail(t.getUserAddrDetail());
    			userDTO.setUserPoint(t.getUserPoint());
    			userDTO.setUserMarketing(t.getUserMarketing());
    			
    			userDTOList.add(userDTO);	
    		}
    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
    		
    		response.setData(userDTOList);
    		
    		return ResponseEntity.ok().body(response);
    		
    	}catch(Exception e){
    		System.out.println(e.getMessage());
    		ResponseDTO<UserDTO> response = new ResponseDTO<>();
    		response.setError(e.getMessage());
    		return ResponseEntity.badRequest().body(response);		
    	}
    };
	
//	//휴대전화 인증
//	void validateTel() {}
//
//	//이메일 인증
//	void validateEmail() {}
//
	//아이디 중복체크
	@PostMapping("/checkId")
	public String checkId(User user) {
		User checkId = userService.checkId(user.getUserId());
		
		if(checkId == null) {
			return "idOk";
		} else {
			return "idFail";
		}
	}
//
//	//닉네임 중복체크
//	void checkNickname() {}
//
//	//회원 수정 (회원정보수정)
//	void updateUser() {}
//
//	//회원 삭제 (회원탈퇴)
//	void deleteUser() {}
//
//	//회원 조회 (회원정보 조회)
//	void getUser() {}
//
//	//아이디 찾기
//	void findById() {}
//
//	//비번 찾기
//	void findByPassword() {}
//
	
	//로그인
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		//로그인한 Member 객체 생성
		User loginUser = userService.login(user.getUserId(), user.getUserPw());

		if(loginUser != null) {
			//로그인된 유저에 대한 토큰 발행 
			final String token = jwtTokenProvider.create(loginUser);
			
			//리턴해줄 MemberDTO 객체 생성
			UserDTO userDTO = new UserDTO();
			userDTO.setUserId(loginUser.getUserId());
			userDTO.setUserName(loginUser.getUserName());
			userDTO.setUserNickname(loginUser.getUserNickname());
			userDTO.setUserTel(loginUser.getUserTel());
			userDTO.setUserMail(loginUser.getUserMail());
			userDTO.setUserRole(loginUser.getUserRole());
			userDTO.setUserZip(loginUser.getUserZip());
			userDTO.setUserAddr(loginUser.getUserAddr());
			userDTO.setUserAddrDetail(loginUser.getUserAddrDetail());
			userDTO.setUserPoint(loginUser.getUserPoint());
			userDTO.setUserMarketing(loginUser.getUserMarketing());
			userDTO.setToken(token);//발행된 토큰 DTO에 담아서 리턴 
			
			return ResponseEntity.ok().body(userDTO);
		} else {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();
			response.setError("login failed");
			return ResponseEntity.badRequest().body(response);
		}
	}
	
//
//	//로그아웃
//	void logout() {}
}
