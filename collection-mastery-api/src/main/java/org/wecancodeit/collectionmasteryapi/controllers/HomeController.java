package org.wecancodeit.collectionmasteryapi.controllers;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.wecancodeit.collectionmasteryapi.repositories.ActressRepository;
import org.wecancodeit.collectionmasteryapi.repositories.ClipRepository;
import org.wecancodeit.collectionmasteryapi.repositories.MovieRepository;
import org.wecancodeit.collectionmasteryapi.repositories.TagRepository;

@CrossOrigin
@Controller
public class HomeController {

	@Resource
	ActressRepository actressRepo;
	@Resource
	MovieRepository movieRepo;
	@Resource
	ClipRepository clipRepo;
	
	@Resource
	TagRepository tagRepo;
	
	public String Home() {
		return "index";
	}
}
