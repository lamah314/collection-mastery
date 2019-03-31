package org.wecancodeit.collectionmasteryapi;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.collectionmasteryapi.models.Actress;
import org.wecancodeit.collectionmasteryapi.models.Clip;
import org.wecancodeit.collectionmasteryapi.models.Movie;
import org.wecancodeit.collectionmasteryapi.models.Rating;
import org.wecancodeit.collectionmasteryapi.models.Tag;
import org.wecancodeit.collectionmasteryapi.repositories.ActressRepository;
import org.wecancodeit.collectionmasteryapi.repositories.ClipRepository;
import org.wecancodeit.collectionmasteryapi.repositories.MovieRepository;
import org.wecancodeit.collectionmasteryapi.repositories.TagRepository;

@Service
public class Initializer implements CommandLineRunner {

	@Resource
	ActressRepository actressRepo;
	@Resource
	MovieRepository movieRepo;
	@Resource
	ClipRepository clipRepo;
	
	@Resource
	TagRepository tagRepo;

	@Override
	public void run(String... args) throws Exception {
		Rating rating1 = new Rating(5);
		Rating rating2 = new Rating(5);
		Rating rating3 = new Rating(5);
		Rating rating4 = new Rating(5);
		Rating rating5 = new Rating(5);
		Rating rating6 = new Rating(5);
		Rating rating7 = new Rating(5);
		Rating rating8 = new Rating(5);
		
		Tag tag1 = tagRepo.save(new Tag("Hot"));
		
		Actress actress1 = new Actress("Scarlett Johannson", "../images/scarlett.jpg");
		Actress actress2 = new Actress("Gal Gadot", "../images/galgadot.jfif");
		Actress actress3 = new Actress("Natalie Portman", "../images/natalieportman.jpg");
		Actress actress4 = new Actress("Jennifer Lawrence", "../images/jenniferlawrence.jpg");
		
		Movie movie1 = new Movie("Avengers: Age of Ultron", "../images/avengersUltra.jpg");
		Movie movie2 = new Movie("Wonder Woman", "../images/wonderWoman.jpg");
		Movie movie3 = new Movie("Black Swan", "../images/natalie_blackswan.jpg");
		Movie movie4 = new Movie("Hunger Games", "../images/jenniferlawrence_hunger_games.jpg");
		
		Clip clip1 = new Clip("Interrogation", "https://www.youtube.com/embed/H44t5gJ6KN4?start=123"); // Scarlett
		Clip clip2 = new Clip("Ooowahhh", "https://www.youtube.com/embed/MS5oNxCQZWQ?start=138"); // Gal Gadot
		Clip clip3 = new Clip("Dance Scene", "https://www.youtube.com/embed/CsvtIzebNcw?start=19"); // Natalie Portman
		Clip clip4 = new Clip("Reaping", "https://www.youtube.com/embed/e3PJ3Du_zDc?start=19"); // Jennifer Lawrence
		
		movie1.addActressToMovie(actress1);
		movie2.addActressToMovie(actress2);
		movie3.addActressToMovie(actress3);
		movie4.addActressToMovie(actress4);
		
		clip1.addMovieToClip(movie1);
		clip2.addMovieToClip(movie2);
		clip3.addMovieToClip(movie3);
		clip4.addMovieToClip(movie4);
			
		
		actress1.addRatingToActress(rating1);
		actress2.addRatingToActress(rating2);
		actress3.addRatingToActress(rating3);
		actress4.addRatingToActress(rating4);
		
		movie1.addRatingToMovie(rating5);
		movie2.addRatingToMovie(rating6);
		movie3.addRatingToMovie(rating7);
		movie4.addRatingToMovie(rating8);
		
		actress1.addTagToActress(tag1);
		actress2.addTagToActress(tag1);
		actress4.addTagToActress(tag1);
		
		movie2.addTagToMovie(tag1);
		movie3.addTagToMovie(tag1);
		
		actressRepo.save(actress1);
		actressRepo.save(actress2);
		actressRepo.save(actress3);
		actressRepo.save(actress4);
		
		movieRepo.save(movie1);
		movieRepo.save(movie2);
		movieRepo.save(movie3);
		movieRepo.save(movie4);
		
		clipRepo.save(clip1); 
		clipRepo.save(clip2);
		clipRepo.save(clip3);
		clipRepo.save(clip4);
		
	}
}
