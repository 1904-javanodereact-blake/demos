package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.model.Movie;

public interface MovieRepo extends JpaRepository<Movie, Integer> {

	List<Movie> findByGenresId(int id);
	
	@Query("FROM Movie m JOIN m.genres g WHERE g.id = :id")
	List<Movie> findByGenre(int id);
}
