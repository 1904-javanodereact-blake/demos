package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Genre;

public interface GenreRepo extends JpaRepository<Genre, Integer> {

	Genre findByName(String name);
}
