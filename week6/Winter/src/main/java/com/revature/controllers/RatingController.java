package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Rating;
import com.revature.services.RatingService;

@RestController
@RequestMapping("ratings")
public class RatingController {
	
	@Autowired
	private RatingService ratingService;

	@GetMapping()
	public List<Rating> findAll() {
		return ratingService.findAll();
	}

	@PostMapping()
	public Rating save(@RequestBody Rating r) {
		return ratingService.save(r);
	}
}
