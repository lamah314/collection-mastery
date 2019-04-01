import Add from './Add'
import Remove from './Remove'
import Movies from './Movies'
import Tags from './Tags'

function renderActresses(actresses) {
    return ` 
    <div>
        <ul class="actresses">
        ${actresses.map(actress => {
        // Actress accesses 
        return ` 
                    <li class="actress">
                        <h5 class="actress__name clickable">${actress.name}</h5>
                        <img class="actress__image clickable"src="${actress.image}" /> 
                    </li>
                    `;

    }) // Adding and Removing Actresses // 
            .join("")}
        </ul>
    </div>
    <div class="user-input"> 
    ${Add.addActress()}
    ${Remove.removeActress()}
</div>
        `;
}

function renderActressesHeader(actresses) {
    return `
        <h4 class="Actress__header">Actresses</h4>
        <div>
        <ul class="actresses">
        ${actresses.map(actress => {
        // Actress accesses 
        return ` 
                    <li class="actress">
                        <h5 class="actress__name clickable">${actress.name}</h5>
                        <img class="actress__image clickable"src="${actress.image}" /> 
                    </li>
                    `;

    })
            .join("")}
        </ul>
    </div>
    `
}

function listActresses(actresses) {
    return (actresses.map(actress => {
        return `   
            <option value="${actress.id}">${actress.name}</option>    
            `;

    })
        .join(""))
}

function renderActressAndMovies(actress) {
    return ` 
    <div>
        <h5 class="actress__name clickable">${actress.name}</h5>
        <h4 class="actress__rating">Average Rating: ${actress.avgRating}</h4>
        <h4 class="actress__tags">Tags</h4>
            ${Tags.renderTags(actress.tags)}
        <img class="actress__image clickable"src="${actress.image}" /> 
        ${Movies.renderMoviesHeader(actress.movies)}
    </div>
    <div class="user-input">
        ${Add.addMovieSpecific(actress)}
        ${Add.addRatingActress(actress)}
        ${Add.addTagToActress(actress)}
    </div>
        `;

}

export default {
    renderActresses, renderActressesHeader, listActresses, renderActressAndMovies
}
