import Actresses from './Actresses'
import Movies from './Movies'
import api from '../utils/api/api-actions'

function addActress() {
    return `
    <section class="add__actress">
        <h3>Add Actress</h3>
        
            <input type="select" class="add__actress-name" placeholder="Actress Name">
            <input type="text" class="add__actress--image" placeholder="image">
            <button class="add__actress--submit clickable">Add Actress</button>
        </section> 
        `
}

function addMovie() {
    api.getRequest('/actresses', actresses => {    
        document.querySelector('.add__movie-actress').innerHTML =  Actresses(actresses) 
    })
    return `
    <section class="add__album">
        <h3>Add Album</h3>
        
            <select type="select" class="add__movie--actress" placeholder="Pick Actress">
            
            </select>                 
            <input type="text" class="add__actress--name" placeholder="title">
            <input type="text" class="add__actress--image" placeholder="image">
            <button class="add__movie--submit clickable">Add Movie</button>
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
            <input type="text" class="add__clip--title" placeholder="title">
            <button class="add__clipSpecific--submit clickable">Add Clip</button>
        </section>
        `
}

function addSong() {
    api.getRequest('/albums', albums => {    
        document.querySelector('.add__song--album').innerHTML =  listAlbums(albums) 
    })

    return `
    <section class="add__song">
        <h3>Add Song</h3>
        
            <select type="select" class="add__song--album" placeholder="Pick Album">
            </select>
            <input type="text" class="add__song--title" placeholder="title">
            <input type="text" class="add__song--link" placeholder="link">
            <input type="text" class="add__song--duration" placeholder="duration">
            <button class="add__song--submit clickable">Add Song</button>
        </section>
        `
}

function addRatingAndCommentSong(song) {
    return `
    <section class="add__rating__comment">
        <h3>Add Rating and Comment to ${song.title}</h3>
        <input type="hidden" class="add__songId" value="${song.id}">
        <select type="select" class="add__rating" placeholder="Choose Rating">
            <option value=1>1</option> 
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option> 
        </select>
        <input type="text" class="add__comment--content" placeholder="comment">
        <button class="add__songRatingComment--submit clickable">Add Comment</button>
    </section> 
        `
}

function addRatingAndCommentAlbum(album) {
    return `
    <section class="add__rating__comment">
        <h3>Add Rating and Comment to ${album.title}</h3>
        <input type="hidden" class="add__albumId" value="${album.id}">
        <select type="select" class="add__rating" placeholder="Choose Rating">
            <option value=1>1</option> 
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option> 
        </select>
        <input type="text" class="add__comment--content" placeholder="comment">
        <button class="add__albumRatingComment--submit clickable">Add Comment</button>
    </section> 
        `
}

function addRatingAndCommentArtist(artist) {
    return `
    <section class="add__rating__comment">
        <h3>Add Rating and Comment to ${artist.name}</h3>
        <input type="hidden" class="add__artistId" value="${artist.id}">
        <select type="select" class="add__rating" placeholder="Choose Rating">
            <option value=1>1</option> 
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option> 
        </select>
        <input type="text" class="add__comment--content" placeholder="comment">
        <button class="add__artistRatingComment--submit clickable">Add Comment</button>
    </section> 
        `
}


export default {
    addArtist, addAlbum, addSong, addRatingAndCommentSong, addRatingAndCommentAlbum, addRatingAndCommentArtist, addSongSpecific, addAlbumSpecific
}
