import Add from './Add'
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

    })
            .join("")}
        </ul>
    </div>
    <div class="user-input">
    ${Add.addActress()}
</div>
        `;
}

function renderActressesHeader(actresses) {
    return `
        <h4 class="Actress__header">Actresses</h4>
        ${this.renderActresses(actresses)}
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
