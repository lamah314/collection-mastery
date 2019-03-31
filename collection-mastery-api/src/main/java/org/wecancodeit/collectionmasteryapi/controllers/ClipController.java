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
import org.wecancodeit.collectionmasteryapi.models.Clip;
import org.wecancodeit.collectionmasteryapi.models.Movie;
import org.wecancodeit.collectionmasteryapi.models.Rating;
import org.wecancodeit.collectionmasteryapi.models.Tag;
import org.wecancodeit.collectionmasteryapi.repositories.ActressRepository;
import org.wecancodeit.collectionmasteryapi.repositories.ClipRepository;
import org.wecancodeit.collectionmasteryapi.repositories.MovieRepository;
import org.wecancodeit.collectionmasteryapi.repositories.TagRepository;

@CrossOrigin
@RestController
@RequestMapping("/clips")
public class ClipController {
	
	@Resource
	ActressRepository actressRepo;
	@Resource
	MovieRepository movieRepo;
	@Resource
	ClipRepository clipRepo;
	
	@Resource
	TagRepository tagRepo;
	
	@GetMapping("")
	public Collection<Clip> getClips() {
		return (Collection<Clip>) clipRepo.findAll();
	}
	
	@GetMapping("/{clipId}")
	public Clip getClip(@PathVariable Long clipId) {
		return clipRepo.findById(clipId).get();
	}
	
	@PostMapping("/addClip")
	public Collection<Clip> addClip(@RequestBody String newClip) throws JSONException{
		JSONObject json = new JSONObject(newClip);
		Movie movie = movieRepo.findById(Long.parseLong(json.getString("movieId"))).get();
		Clip clip = new Clip(json.getString("name"), json.getString("clipLocation"));
		clip.addMovieToClip(movie);
		return (Collection<Clip>) clipRepo.findAll();
	}
	
	@PostMapping("/nameToId")
	public Long convertNameToId(@RequestBody String clipName) throws JSONException {
		JSONObject json = new JSONObject(clipName);
		Long clipId = clipRepo.findByName(json.getString("clipName")).getId();
		return clipId;
	}
	
	@PostMapping("/addClipSpecific")
	public Movie addClipSpecific(@RequestBody String newClip) throws JSONException{
		JSONObject json = new JSONObject(newClip);
		Movie movie = movieRepo.findById(Long.parseLong(json.getString("movieId"))).get();
		Clip clip = new Clip(json.getString("name"), json.getString("clipLocation"));
		clip.addMovieToClip(movie);
		clipRepo.save(clip);
		return movie;
	}
	
	@PostMapping("/addRating")
	public Clip AddRatingToClip(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Rating rating = new Rating(Integer.parseInt(json.getString("rating")));
		Clip clip = clipRepo.findById(Long.parseLong(json.getString("clipId"))).get();
		clip.addRatingToClip(rating);
		clipRepo.save(clip);
		return clip;
	}
	
	@PostMapping("/addTag")
	public Clip AddTagToClip(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Tag tag = tagRepo.findById(Long.parseLong(json.getString("tagId"))).get();
		Clip clip = clipRepo.findById(Long.parseLong(json.getString("clipId"))).get();
		clip.addTagToClip(tag);
		clipRepo.save(clip);
		return clip;
	}
}
