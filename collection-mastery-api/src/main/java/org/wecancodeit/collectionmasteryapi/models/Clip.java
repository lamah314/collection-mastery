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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Clip {

	@Id
	@GeneratedValue
	private Long id;

	private String clipLocation;

	@ManyToOne
	@JsonIgnore
	private Movie movie;

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

	public Movie getMovie() {
		return movie;
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
		this.tags = new ArrayList<Tag>();
		this.ratings = new ArrayList<Rating>();
		calculateAvgRating();
	}

	public void addMovieToClip(Movie movie) {
		this.movie = movie;
	}

	public void addRatingToClip(Rating rating) {
		ratings.add(rating);
		calculateAvgRating();
	}

	public void addTagToClip(Tag tag) {
		tags.add(tag);
	}

	public boolean checkMovieInClip(Movie movie) {
		return this.movie.equals(movie);
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
