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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Tag {

	@Id
	@GeneratedValue
	private Long id;

	private String tag;

	@ManyToMany(mappedBy= "tags")
	@JsonIgnore
	private Collection<Actress> actresses;

	@ManyToMany(mappedBy= "tags")
	@JsonIgnore
	private Collection<Movie> movies;

	@ManyToMany(mappedBy= "tags")
	@JsonIgnore
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
	
	public void deleteActressFromTag(Actress actress) {
		actresses.remove(actress);
	}
	
	public void deleteMovieFromTag(Movie movie) {
		movies.remove(movie);
	}
	
	public void deleteClipFromTag(Clip clip) {
		clips.remove(clip);
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
			
	// Removing Tag 
	public void removeCollections() {
		for (Actress actress: actresses) {
			actress.deleteTagFromActress(this);
		}
		for (Movie movie: movies) {
			movie.deleteTagFromMovie(this);
		}
		for (Clip clip: clips) {
			clip.deleteTagFromClip(this);
		}
 	
		
	}




}
