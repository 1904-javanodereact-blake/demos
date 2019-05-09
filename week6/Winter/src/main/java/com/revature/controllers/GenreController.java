package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Genre;
import com.revature.services.GenreService;

@RestController
@RequestMapping("genres")
public class GenreController {

	@Autowired
	private GenreService genreService;

	@GetMapping()
	public List<Genre> findAll() {
		return genreService.findAll();
	}

	@PostMapping()
	public Genre save(@RequestBody Genre r) {
		return genreService.save(r);
	}
}
