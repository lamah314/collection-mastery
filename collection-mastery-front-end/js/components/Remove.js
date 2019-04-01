import Actresses from './Actresses'
import Tags from './Tags'
import Movies from './Movies'
import Clips from './Clips'
import api from '../utils/api/api-actions'

function removeActress() {
    api.getRequest('http://localhost:8080/actresses', actresses => {
        document.querySelector('.remove__list--actress').innerHTML = Actresses.listActresses(actresses)
    })
    return `
    <section class="add__actress">
        <h3>Remove an Actress</h3>
        
            <select type="select" class="remove__list--actress" placeholder="Pick Actress">
            </select>                 
            <button class="remove__actress--submit clickable">Remove Actress</button>
        </section>
        `
}
function removeTag() {
    api.getRequest('http://localhost:8080/tags', tags => {
        document.querySelector('.remove__list--tag').innerHTML = Tags.listTags(tags)
    })
    return `
    <section class="add__tag">
        <h3>Remove a Tag</h3>
        
            <select type="select" class="remove__list--tag" placeholder="Pick Tag">
            </select>                 
            <button class="remove__tag--submit clickable">Remove Tag</button>
        </section>
        `
}
function removeMovie() {
    api.getRequest('http://localhost:8080/movies', movies => {
        document.querySelector('.remove__list--movie').innerHTML = Movies.listMovies(movies)
    })
    return `
    <section class="add__movie">
        <h3>Remove a Movie</h3>
        
            <select type="select" class="remove__list--movie" placeholder="Pick Movie">
            </select>                 
            <button class="remove__movie--submit clickable">Remove Movie</button>
        </section>
        `
}

function removeClip() {
    api.getRequest('http://localhost:8080/clips', clips => {
        document.querySelector('.remove__list--clip').innerHTML = Clips.listClips(clips)
    })
    return `
    <section class="add__movie">
        <h3>Remove a Movie</h3>
        
            <select type="select" class="remove__list--clip" placeholder="Pick Clip">
            </select>                 
            <button class="remove__clip--submit clickable">Remove Clip</button>
        </section>
        `
}

export default {
    removeActress, removeTag, removeMovie, removeClip
}