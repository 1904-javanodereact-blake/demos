package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Rating;
import com.revature.repository.RatingRepo;

@Service
public class RatingService {

	@Autowired
	private RatingRepo ratingRepo;

	public List<Rating> findAll() {
		return ratingRepo.findAll();
	}

	public Rating save(Rating r) {
		return ratingRepo.save(r); // save will save or update
	}

}
