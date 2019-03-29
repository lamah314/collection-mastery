import Clips from './Clips'
import Add from './add'
import Comments from './comments'


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

function renderMovieAndClips(movie) {
    return `
        <h2 class="movie__name">${movie.name}</h2> 
        <img class= "movie__image" src="${movie.image}" />  
            ${Clips.renderClipsHeader(movie.clips)}  
        <br>
        <h4 class="movie__rating">Average Rating: ${movie.avgRating}</h4>
        <h4 class="movie__comments">Comments</h4>
            ${Comments.renderMovieComments(movie)} 
        <div class="user-input">
            ${Add.addClipSpecific(movie)}
            ${Add.addRatingAndCommentMovie(movie)}
        </div>           
    `;
}

export default {
    renderMovies,
    renderMoviesAdd,
    renderAlbumsAndSongs,
    renderAlbumAndSongs,
    renderAlbumsHeaderAndSongs
}