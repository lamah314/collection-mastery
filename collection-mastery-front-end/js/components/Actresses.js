import Add from './Add'
import Movies from './Movies'

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

function listActresses(actresses) {
    return (actresses.map(actress => {
        return `   
            <option value="${actress.id}">${actress.name}</option>    
            `;

    })
        .join(""))
}

function renderActressAndMovies(actresses) {
    return ` 
    <div>
        <h5 class="actress__name clickable">${actress.name}</h5>
        <img class="actress__image clickable"src="${actress.image}" /> 
        ${Movies.renderMovies(actress.movies)}
    </div>
    <div class="user-input">
        ${Add.addRatingActress(actress)}
    </div>
        `;

}

export default {
    renderActresses, listActresses, renderActressAndMovies
}
