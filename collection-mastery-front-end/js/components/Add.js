import Actresses from './Actresses'
import Movies from './Movies'
import Clips from './Clips'
import Tags from './Tags'
import api from '../utils/api/api-actions'


function addMovie() {
    api.getRequest('http://localhost:8080/actresses', actresses => {
        document.querySelector('.add__movie-actress').innerHTML = Actresses.listActresses(actresses)
    })
    return `
    <section class="add__album">
        <h3>Add Album</h3>
        
            <select type="select" class="add__movie--actress" placeholder="Pick Actress">
            
            </select>                 
            <input type="text" class="add__movie--name" placeholder="title">
            <input type="text" class="add__movie--image" placeholder="image">
            <button class="add__movie--submit clickable">Add Movie</button>
        </section>
        `
}

function addActress() {
    return `
    <section class="add__actress">
        <h3>Add Actress</h3>
        
            <input type="select" class="add__actress--name" placeholder="Actress Name">
            <input type="text" class="add__actress--image" placeholder="image">
            <button class="add__actress--submit clickable">Add Actress</button>
        </section> 
        `
}

function addMovieSpecific(actress) {
    return `
    <section class="add__movie">
        <h3>Add Movie</h3>
        
        <input type="hidden" class="add__movie--actress" value="${actress.id}">
                            
            <input type="text" class="add__movie--name" placeholder="title">
            <input type="text" class="add__movie--image" placeholder="image">
            <button class="add__movieSpecific--submit clickable">Add Movie</button>
        </section>
        `
}

function addClipSpecific(movie) {
    return `
    <section class="add__clip">
            <h3>Add Clip</h3>
            <input type="hidden" class="add__clip--album" value="${movie.id}">
            <input type="text" class="add__clip--title" placeholder="Clip title">
            <button class="add__clipSpecific--submit clickable">Add Clip</button>
        </section>
        `
}

function addClip() {
    api.getRequest('http://localhost:8080/movies', movies => {
        document.querySelector('.add__clip--movie').innerHTML = Movies.listMovies(movies)
    })

    return `
    <section class="add__clip">
        <h3>Add Clip</h3>
        
            <select type="select" class="add__clip--movie" placeholder="Pick Movie">
            </select>
            <input type="text" class="add__clip--clipLocation" placeholder="URL">
            <button class="add__clip--submit clickable">Add Clip</button>
        </section>
        `
}

function addRatingClip(clip) {
    return `
    <section class="add__rating__clip">
        <h3>Add Rating to Clip</h3>
        <input type="hidden" class="add__clipId" value="${clip.id}">
        <select type="select" class="add__rating" placeholder="Choose Rating">
            <option value=1>1</option> 
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option> 
        </select>
        <button class="add__clipRating--submit clickable">Add Rating</button>
    </section> 
        `
}

function addRatingMovie(movie) {
    return `
    <section class="add__rating__movie>
        <h3>Add Rating to Movie</h3>
        <input type="hidden" class="add__movieId" value="${movie.id}">
        <select type="select" class="add__rating" placeholder="Choose Rating">
            <option value=1>1</option> 
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option> 
        </select>
        <button class="add__movieRating--submit clickable">Add Rating</button>
    </section> 
        `
}

function addRatingActress(actress) {
    return `
    <section class="add__rating__actress">
        <h3>Add Rating to Actress</h3>
        <input type="hidden" class="add__actressId" value="${actress.id}">
        <select type="select" class="add__rating" placeholder="Choose Rating">
            <option value=1>1</option> 
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option> 
        </select>
        <button class="add__actressRating--submit clickable">Add Rating</button>
    </section> 
        `
}

function addTag() {
    return `
    <section class="add__tag__actress">
        <h3>Add a Tag</h3>
        <input type="text" class="add__tag--tag" placeholder="tag">
        <button class="add__tag--submit clickable">Add Tag</button>
    </section> 
        `
}

function addTagToActress(actress) {
    api.getRequest('http://localhost:8080/tags', tags => {
        document.querySelector('.add__tag').innerHTML = Tags.listTags(tags)
    })

    return `
    <section class="add__tag__actress">
        <h3>Add Tag to Actress</h3>
        <input type="hidden" class="add__actressId" value="${actress.id}">
        <select type="select" class="add__tag" placeholder="Choose Tag">
        </select>
        <button class="add__actressTag--submit clickable">Add Tag</button>
    </section> 
        `
}

function addTagToMovie(movie) {
    api.getRequest('http://localhost:8080/tags', tags => {
        document.querySelector('.add__tag').innerHTML = Tags.listTags(tags)
    })
    return `
    <section class="add__tag__movie">
        <h3>Add Tag to Movie</h3>
        <input type="hidden" class="add__movieId" value="${movie.id}">
        <select type="select" class="add__tag" placeholder="Choose Tag">
            
        </select>
        <button class="add__movieTag--submit clickable">Add Tag</button>
    </section> 
        `
}

function addTagToClip(clip) {
    api.getRequest('http://localhost:8080/tags', tags => {
        document.querySelector('.add__tag').innerHTML = Tags.listTags(tags)
    })
    return `
    <section class="add__tag__clip">
        <h3>Add Tag to Clip</h3>
        <input type="hidden" class="add__clipId" value="${clip.id}">
        <select type="select" class="add__tag" placeholder="Choose Tag">
    
        </select>
        <button class="add__clipRating--submit clickable">Add Tag</button>
    </section> 
        `
}


export default {
    addActress,
    addMovie,
    addClip,
    addRatingActress,
    addRatingMovie,
    addRatingClip,
    addRatingActress,
    addClipSpecific,
    addMovieSpecific,
    addTag,
    addTagToActress,
    addTagToMovie,
    addTagToClip
}