import Clips from './Clips'
import Add from './Add'
import Remove from './Remove'
import Tags from './Tags'



function renderMovies(movies) {
    return `
    <div>
    <ul class="albums">
    ${movies.map(movie => {
        return `

                        <li class="movie">
                            <h5 class="movie__name clickable">${movie.name}</h5> 
                            <img class="movie__image clickable"src="${movie.image}" />                       
                        </li>
                        
                    `;
    })
            .join("")}
        </ul>
        </div>
        `;
}

function renderMoviesAdd(movies) {
    return `
        ${renderMovies(movies)}
        <div class="user-input">
        ${Add.addMovie()}
        ${Remove.removeMovie()}
    </div>
        `;
}

function renderMoviesAndClips(movies) {
    return `
    <div>
    <ul class="movies">
    ${movies.map(movie => {
        return `
        <div>
        <h5 class="movie__name clickable" value=${movie.id}>${movie.title}</h5>  
        <img class= "movie__image clickable" src="${movie.image}" /> 
                <li class="movie">
                    
                        ${Clips.renderClips(movie.Clips)}             
                </li>
        </div>
            `;
    })
            .join("")}
    </ul>
    </div>
    `;
}

function renderMoviesHeaderAndClips(movies) {
    return `
        <h4 class="Movie__header">Movies</h4>
        ${this.renderMoviesAndClips(movies)}
    `
}

function renderMoviesHeader(movies) {
    return `
        <h4 class="Movie__header">Movies</h4>
        ${this.renderMovies(movies)}
    `
}

function renderMovieAndClips(movie) {
    return `
        <h2 class="movie__name">${movie.name}</h2> 
        <img class= "movie__image" src="${movie.image}" />  
            ${Clips.renderClipsHeader(movie.clips)}  
        <br>
        <h4 class="movie__rating">Average Rating: ${movie.avgRating}</h4> 
        <div class="user-input">
            ${Add.addClipSpecific(movie)}
            ${Add.addRatingMovie(movie)}
            ${Add.addTagToMovie(movie)}
        </div>           
    `;
}

function listMovies(movies) {
    return (movies.map(movie => {
        return `   
            <option value="${movie.id}">${movie.name}</option>    
            `;
    })
        .join(""))
}

export default {
    renderMovies,
    renderMoviesAdd,
    renderMoviesAndClips,
    renderMoviesHeaderAndClips,
    renderMoviesHeader,
    renderMovieAndClips,
    listMovies
}
