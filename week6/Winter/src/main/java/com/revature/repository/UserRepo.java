package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.AppUser;

public interface UserRepo extends JpaRepository<AppUser, Integer> {
	public AppUser findByUsernameAndPassword(String username, String password);
}
