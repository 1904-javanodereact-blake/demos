package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Movie;

public interface MovieRepo extends JpaRepository<Movie, Integer> {

	List<Movie> findByGenresId(int id);
}
