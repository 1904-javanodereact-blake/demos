package com.revature.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.revature.model.AppUser;

@Component
public class AuthUtil {
	public AppUser getCurrentUser() {
		HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		return (AppUser) req.getSession().getAttribute("user");
	}
}
