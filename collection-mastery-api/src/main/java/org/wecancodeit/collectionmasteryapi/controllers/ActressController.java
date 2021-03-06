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
import org.wecancodeit.collectionmasteryapi.models.Rating;
import org.wecancodeit.collectionmasteryapi.models.Tag;
import org.wecancodeit.collectionmasteryapi.repositories.ActressRepository;
import org.wecancodeit.collectionmasteryapi.repositories.ClipRepository;
import org.wecancodeit.collectionmasteryapi.repositories.MovieRepository;
import org.wecancodeit.collectionmasteryapi.repositories.TagRepository;

@CrossOrigin
@RestController
@RequestMapping("/actresses")
public class ActressController {
	
	@Resource
	ActressRepository actressRepo;
	@Resource
	MovieRepository movieRepo;
	@Resource
	ClipRepository clipRepo;
	
	@Resource
	TagRepository tagRepo;
	
//	@GetMapping("/")
//	public String getArtistHome() {
//		return "/artists/home";
//	}
	
	@GetMapping("")
	public Collection<Actress> getActresses() {
		return (Collection<Actress>) actressRepo.findAll();
	}
	
	@GetMapping("/{actressId}")
	public Actress getActress(@PathVariable Long actressId) {
		return actressRepo.findById(actressId).get();
	}
	
	@PostMapping("/addActress")
	public Collection<Actress> addArtist(@RequestBody String newActress) throws JSONException{
		JSONObject json = new JSONObject(newActress);
		actressRepo.save(new Actress(json.getString("name"), json.getString("image")));
		return (Collection<Actress>) actressRepo.findAll();
	}
	
	@PostMapping("/removeActress")
	public Collection<Actress> removeArtist(@RequestBody String actressId) throws JSONException{
		JSONObject json = new JSONObject(actressId);
		Actress actress = actressRepo.findById(Long.parseLong(json.getString("actressId"))).get();
		actress.removeCollections();
		actressRepo.delete(actress);
		return (Collection<Actress>) actressRepo.findAll();
	}
	
	@PostMapping("/nameToId")
	public Long convertNameToId(@RequestBody String actressName) throws JSONException {
		JSONObject json = new JSONObject(actressName);
		Long actressId = actressRepo.findByName(json.getString("actressName")).getId();
		return actressId;
	}
	
	@PostMapping("/addRating")
	public Actress AddRatingToActress(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Rating rating = new Rating(Integer.parseInt(json.getString("rating")));
		Actress actress = actressRepo.findById(Long.parseLong(json.getString("actressId"))).get();
		actress.addRatingToActress(rating);
		actressRepo.save(actress);
		return actress;
	}
	
	@PostMapping("/addTag")
	public Actress AddTagToActress(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Tag tag = tagRepo.findById(Long.parseLong(json.getString("tagId"))).get();
		Actress actress = actressRepo.findById(Long.parseLong(json.getString("actressId"))).get();
		actress.addTagToActress(tag);
		actressRepo.save(actress);
		return actress;
	}
}
