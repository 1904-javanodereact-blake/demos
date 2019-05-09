package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Movie;
import com.revature.services.MovieService;

@RestController // implies @ResponseBody for all methods
@RequestMapping("movies") // set base path for all endpoints
public class MovieController {

	@Autowired // allow spring to inject the dependency
	private MovieService movieService;

//	List<Rating> ratings = new ArrayList<>();
//	List<Genre> genres = new ArrayList<>();
//	List<Movie> movies = new ArrayList<>();
//
//	{
//		ratings.add(new Rating(1, "R"));
//		ratings.add(new Rating(2, "PG-13"));
//		ratings.add(new Rating(3, "PG"));
//		ratings.add(new Rating(4, "G"));
//
//		genres.add(new Genre(1, "Action"));
//		genres.add(new Genre(2, "Musical"));
//		genres.add(new Genre(3, "Comedy"));
//		genres.add(new Genre(4, "Horror"));
//		genres.add(new Genre(5, "Romance"));
//		genres.add(new Genre(6, "Indie"));
//		genres.add(new Genre(7, "Sci-fi"));
//
//		List<Genre> tempGenres = new ArrayList<>();
//		tempGenres.add(genres.get(0));
//
//		movies.add(new Movie(1, "Dark City", "Actionmovie from the 90s that may be better than matrix", ratings.get(0),
//				tempGenres));
//
//		tempGenres = new ArrayList<>();
//		tempGenres.add(genres.get(1));
//		movies.add(new Movie(2, "The Sound of Music", "Its a musical", ratings.get(3), tempGenres));
//
//		tempGenres = new ArrayList<>();
//		tempGenres.add(genres.get(4));
//		tempGenres.add(genres.get(0));
//		movies.add(new Movie(3, "Endgame", "People fight", ratings.get(0), tempGenres));
//	}

	@GetMapping()
	public List<Movie> findAll() {
		return movieService.findAll();
	}

	@GetMapping("{id}")
	public Movie findById(@PathVariable int id) {
//		return movies.stream().filter(movie -> movie.getId() == id).findFirst().get();
		return movieService.findById(id);
	}

	@GetMapping("genres/{genreId}")
	public List<Movie> findByGenre(@PathVariable int genreId) {
//		return movies.stream().filter(movie -> movie.getGenres().stream().anyMatch(genre -> genre.getId() == genreId))
//				.collect(Collectors.toList());
		return movieService.findByGenre(genreId);
	}

	// @RequestBody will convert json body to object
	@PostMapping()
	public Movie save(@RequestBody Movie m) {

//		m.setId((int) Math.round(Math.random() * 1000000));
//
//		movies.add(m);
//		return m;
		return movieService.save(m);
	}

}
