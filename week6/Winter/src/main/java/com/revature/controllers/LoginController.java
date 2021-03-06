package com.revature.controllers;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dto.CredentialDto;
import com.revature.model.AppUser;
import com.revature.services.UserService;

@RestController
public class LoginController {
	Logger logger = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<AppUser> login(@RequestBody CredentialDto credentials, HttpServletRequest req) {
		logger.debug("attempting to login");
		AppUser user = userService.login(credentials);
		if (user != null) {
			req.getSession().setAttribute("user", user);
			return new ResponseEntity<AppUser>(user, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<AppUser>(HttpStatus.BAD_REQUEST);
		}
	}
}
