package org.wecancodeit.collectionmasteryapi.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Clip {

	@Id
	@GeneratedValue
	private Long id;

	private String clipLocation;

	@ManyToOne
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

	public String getClipLocation() {
		return clipLocation;
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

	public Clip() {
	}

	public Clip(String clipLocation) {
		this.clipLocation = clipLocation;
		this.movies = new ArrayList<Movie>();
		this.tags = new ArrayList<Tag>();
		this.ratings = new ArrayList<Rating>();
		calculateAvgRating();
	}

	public void addMovieToClip(Movie movie) {
		movies.add(movie);
	}

	public void addRatingToClip(Rating rating) {
		ratings.add(rating);
		calculateAvgRating();
	}

	public void addTagToClip(Tag tag) {
		tags.add(tag);
	}

	public boolean checkMovieInClip(Movie movie) {
		return movies.contains(movie);
	}

	public boolean checkTagInArtist(Tag tag) {
		return tags.contains(tag);
	}

	public void calculateAvgRating() {
		double count = 0;
		double sum = 0;
		for (Rating rating : ratings) {
			sum += rating.getRating();
			count++;
		}
		if (count > 0) {
			avgRating = sum / count;
		}
	}

}
