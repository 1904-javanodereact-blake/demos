package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dto.CredentialDto;
import com.revature.model.AppUser;
import com.revature.repository.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;

	public AppUser login(CredentialDto user) {
		return userRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
	}
}
