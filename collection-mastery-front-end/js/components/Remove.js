import Actresses from './Actresses'
import Movies from './Movies'
import Clips from './Clips'
import Tags from './Tags'
import api from '../utils/api/api-actions'

function removeActress() {
    api.getRequest('http://localhost:8080/actresses', actresses => {
        document.querySelector('.remove__list--actress').innerHTML = Actresses.listActresses(actresses)
    })
    return `
    <section class="add__album">
        <h3>Remove an Actress</h3>
        
            <select type="select" class="remove__list--actress" placeholder="Pick Actress">
            </select>                 
            <button class="remove__actress--submit clickable">Remove Actress</button>
        </section>
        `
}

export default {
    removeActress
}