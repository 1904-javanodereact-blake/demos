package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.AppUser;

@RestController
@RequestMapping("users")
public class UserController {
	private List<AppUser> users = new ArrayList<>();

	public UserController() {
		users.add(new AppUser(1, "Blake", "pass"));
		users.add(new AppUser(2, "Jerry", "pass"));
	}

	@GetMapping("{id}")
	public AppUser findById(@PathVariable int id) {
		for (AppUser u : users) {
			if (u.getId() == id) {
				return u;
			}
		}

		return null;
	}

	@GetMapping
	public List<AppUser> findAll() {
		List<AppUser> users = new ArrayList<>();
		users.add(new AppUser(1, "Blake", "pass"));
		users.add(new AppUser(2, "Jerry", "pass"));
		return users;
	}
}
