package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.intercomm.UserClient;
import com.revature.model.Account;
import com.revature.model.AppUser;

@RestController
@RequestMapping("accounts")
public class AccountController {

	@Autowired
	private UserClient userClient;

	private List<Account> accounts = new ArrayList<>();

	public AccountController() {
		accounts.add(new Account(1, "Checking", 235234.32, 2, null));
		accounts.add(new Account(2, "Savings", 234.32, 2, null));
		accounts.add(new Account(3, "Checking", 324324.32, 1, null));
	}

	@GetMapping
	public List<Account> findAll() {
		return accounts;
	}

	@GetMapping("owner/{id}")
	public ResponseEntity<Account> findById(@PathVariable int id) {
		for (Account acc : accounts) {
			if (acc.getOwnerId() == id) {
				AppUser owner = userClient.findById(id); // retreive owner from the other service
				acc.setOwner(owner);
				HttpStatus respStatus = HttpStatus.OK;
				if(owner.getId() == -1) {
					respStatus = HttpStatus.PARTIAL_CONTENT;
					acc.setOwner(null);
				}
				ResponseEntity<Account> resp = new ResponseEntity<Account>(acc, respStatus);
				return resp;

			}
		}
		return null;
	}
}
