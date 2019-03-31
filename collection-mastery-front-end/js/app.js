import events from './utils/events/event-actions'
import api from './utils/api/api-actions'
import Actresses from './Components/Actresses'
import Movies from './Components/Movies'
import Clips from './Components/Clips'
import Header from './Components/header'
import LandingPage from './Components/landingPage'
import Footer from './Components/footer'

header()
main()
footer()

function header() {

    getHeaderContext().innerHTML = Header()

    // Main Page // 

    events.on(getHeaderContext(), 'click', () => {
        if (event.target.classList.contains('header-title')) {
            getAppContext().innerHTML = LandingPage();
           
        }
        if (event.target.classList.contains('nav-actress')) {
        api.getRequest('http://localhost:8080/actresses', actresses => {

                getAppContext().innerHTML = Actresses.renderActresses(actresses);
            })
        }
        if (event.target.classList.contains('nav-movie')) {
            api.getRequest('http://localhost:8080/movies', movies => {
                getAppContext().innerHTML = Movies.renderMoviesAdd(movies);
            })
        }
        if (event.target.classList.contains('nav-clip')) {
            api.getRequest('http://localhost:8080/clips', clips => {
            // api.getRequest('/clips', (clips) => { // Original Code 
                getAppContext().innerHTML = Clips.renderClipsAdd(clips);
            })
        }
    })  
}

function main() {

    getAppContext().innerHTML = LandingPage();

    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('actress__name')) {
            const actressName = event.target.parentElement.querySelector('.actress__name').textContent
            var actressId
            api.postRequest('/actresses/nameToId', {
                actressName: actressName
            }, (id)=> 
            {
                actressId = id
                api.getRequest(('/actresses/' + actressId), (actress) => {
                    getAppContext().innerHTML = Actresses.renderActressAndMovies(actress);
                })
            })
        }
        if (event.target.classList.contains('actress__image')) {
            const actressName = event.target.parentElement.querySelector('.actress__name').textContent
            var actressId
            api.postRequest('/actresses/nameToId', {
                actressName: actressName
            }, (id)=> 
            {
                actressId = id
                api.getRequest(('/actresses/' + actressId), (actress) => {
                    getAppContext().innerHTML = Actresses.renderActressAndMovies(actress);
                })
            })
        }
        if (event.target.classList.contains('movie__name')) {
            const movieName = event.target.parentElement.querySelector('.movie__name').textContent
            var movieId
            api.postRequest('/movies/nameToId', {
                movieName: movieName
            }, (id)=> 
            {
                movieId = id
                api.getRequest(('/movies/' + movieId), (movie) => {
                    getAppContext().innerHTML = Movies.renderActressMovieAndClips(actress);
                })
            })
        }
       
    })
}

function footer() {

    getFooterContext().innerHTML = Footer();

}

function getHeaderContext() {
    return document.querySelector("#header");
}

function getAppContext() {
    return document.querySelector("#app");
}

function getFooterContext() {
    return document.querySelector("#footer");
}