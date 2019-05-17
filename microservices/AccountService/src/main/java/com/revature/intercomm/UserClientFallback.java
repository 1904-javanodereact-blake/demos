package com.revature.intercomm;

import java.util.List;

import org.springframework.stereotype.Component;

import com.revature.model.AppUser;

@Component
public class UserClientFallback implements UserClient {

	@Override
	public AppUser findById(int id) {

		AppUser user = new AppUser();
		user.setId(-1);
		return user;
	}

	@Override
	public List<AppUser> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
