package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Rating;

public interface RatingRepo extends JpaRepository<Rating, Integer> {

}
