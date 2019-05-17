package com.revature.intercomm;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.revature.exceptions.IntercommFailedException;
import com.revature.model.AppUser;

@FeignClient(name = "user-service", fallback=UserClientFallback.class)
public interface UserClient {

	@GetMapping("users/{id}")
	AppUser findById(@PathVariable(name = "id") int id);
	
	@GetMapping("users")
	List<AppUser> findAll();

}
