package org.wecancodeit.collectionmasteryapi.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Tag {

	@Id
	@GeneratedValue
	private Long id;

	private String tag;

	@ManyToMany(mappedBy= "tags")
	private Collection<Actress> actresses;

	@ManyToMany(mappedBy= "tags")
	private Collection<Movie> movies;

	@ManyToMany(mappedBy= "tags")
	private Collection<Clip> clips;

	public Tag() {
	}

	public Tag(String tag) {
		this.tag = tag;
		this.actresses = new ArrayList<Actress>();
		this.movies = new ArrayList<Movie>();
		this.clips = new ArrayList<Clip>();
	}

	public Long getId() {
		return id;
	}

	public String getTag() {
		return tag;
	}

	public Collection<Actress> getActresses() {
		return actresses;
	}

	public Collection<Movie> getMovies() {
		return movies;
	}

	public Collection<Clip> getClips() {
		return clips;
	}

	public void addActresstoTag(Actress actress) {
		actresses.add(actress);
	}
	
	public void addMovietoTag(Movie movie) {
		movies.add(movie);
	}
	
	public void addCliptoTag(Clip clip) {
		clips.add(clip);
	}

	public boolean checkActressInTag(Actress actress) {
		return actresses.contains(actress);
	}
	
	public boolean checkMovieInTag(Movie movie) {
		return movies.contains(movie);
	}
	
	public boolean checkClipInTag(Clip clip) {
		return clips.contains(clip);
	}


}