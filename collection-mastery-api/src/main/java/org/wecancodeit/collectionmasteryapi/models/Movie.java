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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Movie {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String image;

	@ManyToMany
	@JsonIgnore
	private Collection<Actress> actresses;

	@ManyToMany
	private Collection<Tag> tags;

	@ElementCollection
	@CollectionTable
	private Collection<Rating> ratings;

	@OneToMany(mappedBy = "movie")
	private Collection<Clip> clips;

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

	public Collection<Actress> getActresses() {
		return actresses;
	}

	public Collection<Tag> getTags() {
		return tags;
	}

	public Collection<Rating> getRatings() {
		return ratings;
	}

	public Collection<Clip> getClips() {
		return clips;
	}

	public double getAvgRating() {
		return avgRating;
	}

	public Movie() {
	}

	public Movie(String name, String image) {
		this.name = name;
		this.image = image;
		this.actresses = new ArrayList<Actress>();
		this.tags = new ArrayList<Tag>();
		this.ratings = new ArrayList<Rating>();
		this.clips = new ArrayList<Clip>();
		calculateAvgRating();
	}

	// Removing Movie
	public void removeCollections() {
		for (Tag tag: tags) {
			tag.deleteMovieFromTag(this);
		}
//		for (Clip clip: clips) {
//			clip.deleteMovieFromClip(this);
//		}

	}

	public void addActressToMovie(Actress actress) {
		actresses.add(actress);
	}

	public void deleteActressFromMovie(Actress actress) {
		actresses.remove(actress);
	}

	public void addRatingToMovie(Rating rating) {
		ratings.add(rating);
		calculateAvgRating();
	}

	public void addTagToMovie(Tag tag) {
		tags.add(tag);
	}

	public boolean checkActressInMovie(Actress actress) {
		return actresses.contains(actress);
	}

	public boolean checkTagInMovie(Tag tag) {
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
