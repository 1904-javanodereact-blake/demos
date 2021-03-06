package com.revature.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Genre;
import com.revature.model.Movie;
import com.revature.repository.MovieRepo;

@Service
public class MovieService {

	@Autowired
	private MovieRepo movieRepo;

	public List<Movie> findAll() {
		return movieRepo.findAll();
	}

	public Movie findById(int id) {
		return movieRepo.getOne(id);
	}

	public List<Movie> findByGenre(int genreId) {
		return movieRepo.findByGenre(genreId);
	}

	public Movie save(Movie m) {
		return movieRepo.save(m);
	}

	@Transactional
	public void addGenreToMovie(int id, Genre genre) {
		Movie m = movieRepo.getOne(id);
		m.getGenres().add(genre);
	}
}
