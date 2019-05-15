package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Account;

@RestController
@RequestMapping("accounts")
public class AccountController {

	@GetMapping
	public List<Account> findAll() {
		List<Account> accounts = new ArrayList<>();
		accounts.add(new Account(1, "Checking", 235234.32, 2, null));
		accounts.add(new Account(2, "Savings", 234.32, 2, null));
		accounts.add(new Account(3, "Checking", 324324.32, 1, null));
		return accounts;
	}
}
