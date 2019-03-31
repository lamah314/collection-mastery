package org.wecancodeit.collectionmasteryapi.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Actress{

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String image;
	
	@ManyToMany(mappedBy = "actresses")
	private Collection<Movie> movies;

	@ManyToMany
	private Collection<Tag> tags;
	
	@ElementCollection
	@CollectionTable
	private Collection<Rating> ratings;
	
	private double avgRating;

	public Long getId() {
		return id;
	}

	public String getImage() {
		return image;
	}

	public String getName() {
		return name;
	}

	public Collection<Movie> getMovies() {
		return movies;
	}

	public Collection<Tag> getTags() {
		return tags;
	}
	
	public Collection<Rating> getRatings() {
		return ratings;
	}
	
	public double getAvgRating() {
		return avgRating;
	}

	public Actress() {
	}

	public Actress(String name, String image) {
		this.name = name;
		this.image = image;
		this.movies = new ArrayList<Movie>();
		this.tags = new ArrayList<Tag>();
		this.ratings = new ArrayList<Rating>();
		calculateAvgRating();
	}

	public void removeCollections() {
		for (Movie movie: movies) {
			movie.deleteActressFromMovie(this);
		}
		for (Tag tag: tags) {
			tag.deleteActressFromTag(this);
		}
	}
	
	public void addMovieToActress(Movie movie) {
		movies.add(movie);
	}
	
	

  public void addRatingToActress(Rating rating) {
	  	ratings.add(rating);
		calculateAvgRating();
	}
	
	public void addTagToActress(Tag tag) {
		tags.add(tag);
	}
	
	public boolean checkMovieInActress(Movie movie) {
		return movies.contains(movie);
	}
	
	public boolean checkTagInActress(Tag tag) {
		return tags.contains(tag);
	}
	
	public void calculateAvgRating() {
		double count=0;
		double sum =0;
		for (Rating rating : ratings) {
			sum += rating.getRating();
			count++;
		}
		if (count > 0) {
			avgRating = sum/count;
		}
	}

}
