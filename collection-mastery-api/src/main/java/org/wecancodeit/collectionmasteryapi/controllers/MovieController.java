package org.wecancodeit.collectionmasteryapi.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.collectionmasteryapi.models.Actress;
import org.wecancodeit.collectionmasteryapi.models.Movie;
import org.wecancodeit.collectionmasteryapi.models.Rating;
import org.wecancodeit.collectionmasteryapi.models.Tag;
import org.wecancodeit.collectionmasteryapi.repositories.ActressRepository;
import org.wecancodeit.collectionmasteryapi.repositories.ClipRepository;
import org.wecancodeit.collectionmasteryapi.repositories.MovieRepository;
import org.wecancodeit.collectionmasteryapi.repositories.TagRepository;

@CrossOrigin
@RestController
@RequestMapping("/movies")
public class MovieController {
	
	@Resource
	ActressRepository actressRepo;
	@Resource
	MovieRepository movieRepo;
	@Resource
	ClipRepository clipRepo;
	
	@Resource
	TagRepository tagRepo;

	
	@GetMapping("")
	public Collection<Movie> getMovies() {
		return (Collection<Movie>) movieRepo.findAll();
	}
	
	@GetMapping("/{movieId}")
	public Movie getMovie(@PathVariable Long movieId) {
		return movieRepo.findById(movieId).get();
	}
	
	@PostMapping("/addMovie")
	public Collection<Movie> addMovie(@RequestBody String newMovie) throws JSONException{
		JSONObject json = new JSONObject(newMovie);
		Actress actress = actressRepo.findById(Long.parseLong(json.getString("artistId"))).get();
		Movie movie = new Movie(json.getString("name"), json.getString("image"));
		movie.addActressToMovie(actress);
		return (Collection<Movie>) movieRepo.findAll();
	}
	
	@PostMapping("/addMovieSpecific")
	public Actress addMovieSpecific(@RequestBody String newMovie) throws JSONException{
		JSONObject json = new JSONObject(newMovie);
		Actress actress = actressRepo.findById(Long.parseLong(json.getString("artistId"))).get();
		Movie movie = new Movie(json.getString("name"), json.getString("image"));
		movie.addActressToMovie(actress);
		return actress;
	}
	
	@PostMapping("/nameToId")
	public Long convertNameToId(@RequestBody String movieName) throws JSONException {
		JSONObject json = new JSONObject(movieName);
		Long movieId = movieRepo.findByName(json.getString("movieName")).getId();
		return movieId;
	}
	
	@PostMapping("/addRating")
	public Movie AddRatingToMovie(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Rating rating = new Rating(Integer.parseInt(json.getString("rating")));
		Movie movie = movieRepo.findById(Long.parseLong(json.getString("movieId"))).get();
		movie.addRatingToMovie(rating);
		movieRepo.save(movie);
		return movie;
	}
	
	@PostMapping("/addTag")
	public Movie AddTagToMovie(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Tag tag = tagRepo.findById(Long.parseLong(json.getString("tagId"))).get();
		Movie movie = movieRepo.findById(Long.parseLong(json.getString("movieId"))).get();
		movie.addTagToMovie(tag);
		movieRepo.save(movie);
		return movie;
	}
	
	// Removing Movies 
	@PostMapping("/removeMovie")
	public Collection<Movie> removeMovie(@RequestBody String movieId) throws JSONException{
		JSONObject json = new JSONObject(movieId);
		Movie movie = movieRepo.findById(Long.parseLong(json.getString("movieId"))).get();
		movie.removeCollections();
		movieRepo.delete(movie);
		return (Collection<Movie>) movieRepo.findAll();
	}
}
