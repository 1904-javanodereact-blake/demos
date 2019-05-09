package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Genre;
import com.revature.repository.GenreRepo;

@Service
public class GenreService {

	@Autowired
	private GenreRepo genreRepo;

	public List<Genre> findAll() {
		return genreRepo.findAll();
	}

	public Genre save(Genre g) {
		return genreRepo.save(g);
	}
}
