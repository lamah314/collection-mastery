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
@RequestMapping("/tags")
public class TagController {
	
	@Resource
	ActressRepository actressRepo;
	@Resource
	MovieRepository movieRepo;
	@Resource
	ClipRepository clipRepo;
	
	@Resource
	TagRepository tagRepo;

	
	@GetMapping("")
	public Collection<Tag> getTags() {
		return (Collection<Tag>) tagRepo.findAll();
	}
	
	@GetMapping("/{movieId}")
	public Tag getTag(@PathVariable Long tagId) {
		return tagRepo.findById(tagId).get();
	}
		
	@PostMapping("/nameToId")
	public Long convertNameToId(@RequestBody String tagName) throws JSONException {
		JSONObject json = new JSONObject(tagName);
		Long tagId = tagRepo.findByTag(json.getString("tagName")).getId();
		return tagId;
	}
	
	@PostMapping("/addTag")
	public Collection<Tag> AddTag(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Tag tag = new Tag(json.getString("tag"));
		tagRepo.save(tag);
		return (Collection<Tag>) tagRepo.findAll();
	}
}
