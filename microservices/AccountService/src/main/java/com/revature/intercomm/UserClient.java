package com.revature.intercomm;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.revature.model.AppUser;

@FeignClient(name = "user-service")
public interface UserClient {

	@GetMapping("users/{id}")
	AppUser findById(@PathVariable(name = "id") int id);

}
