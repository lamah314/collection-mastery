import Actresses from './Actresses'
import Movies from './Movies'
import Clips from './Clips'
import Add from './Add'
import api from '../utils/api/api-actions'
import Remove from './Remove'

// List All Tags //

function renderTags(tags) {
    return ` 
    <div>
        <ul class="tags">
        ${tags.map(tag => {
            return ` 
                    <li class="tag">
                    <h5 class="tag_type clickable">${tag.tag}</h5>
                    </li>
                    `;
        }) // Adding and Removing Actresses //
        .join("")}
        </ul>
    </div>
        `;

}
// Listing All Tags, Gives User option to Add Tag // 

function renderTagsAdd(tags) {
    return `
        ${renderTags(tags)}
        <div class="user-input">
            ${Add.addTag()}
            ${Remove.removeTag()}
        </div>
        `;

// List of Tags to Choose From //
}

function listTags(tags) {
    return (tags.map(tag=> {
        return `   
            <option value="${tag.id}">${tag.tag}</option>    
            `;

    })
        .join(""))
}

function renderTag(tagId) {
    api.getRequest('http://localhost:8080/tags/'+ tagId +'/actress', actresses => {
        document.querySelector('.tag--actress').innerHTML = Actresses.renderActressesHeader(actresses)
    })
    api.getRequest('http://localhost:8080/tags/'+ tagId +'/movie', movies => {
        document.querySelector('.tag--movie').innerHTML = Movies.renderMoviesHeader(movies)
    })
    api.getRequest('http://localhost:8080/tags/'+ tagId +'/clip', clips => {
        document.querySelector('.tag--clip').innerHTML = Clips.renderClipsHeader(clips)
    })
    return ` 
    <div>
        <div class="tag--actress"></div>
        <div class="tag--movie"></div>
        <div class="tag--clip"></div>
    </div>  
        `;
}
    
    

export default {
renderTags,
renderTagsAdd, 
listTags,
renderTag
}