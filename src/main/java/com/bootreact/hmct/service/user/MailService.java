package com.bootreact.hmct.service.user;

public interface MailService {

	String sendSimpleMessage(String email) throws Exception;

	String sendTemporaryPwMessage(String email) throws Exception;
}
