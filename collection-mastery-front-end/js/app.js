import events from './utils/events/event-actions'
import api from './utils/api/api-actions'
import Actresses from './Components/Actresses'
import Movies from './Components/Movies'
import Clips from './Components/Clips'
import Tags from './Components/Tags'
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
        if (event.target.classList.contains('nav-tag')) {
            api.getRequest('http://localhost:8080/tags', tags => {
                // api.getRequest('/clips', (clips) => { // Original Code 
                getAppContext().innerHTML = Tags.renderTagsAdd(tags);
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
            api.postRequest('http://localhost:8080/actresses/nameToId', {
                actressName: actressName
            }, (id) => {
                actressId = id
                api.getRequest(('http://localhost:8080/actresses/' + actressId), (actress) => {
                    getAppContext().innerHTML = Actresses.renderActressAndMovies(actress);
                })
            })
        }
        if (event.target.classList.contains('actress__image')) {
            const actressName = event.target.parentElement.querySelector('.actress__name').textContent
            var actressId
            api.postRequest('http://localhost:8080/actresses/nameToId', {
                actressName: actressName
            }, (id) => {
                actressId = id
                api.getRequest(('http://localhost:8080/actresses/' + actressId), (actress) => {
                    getAppContext().innerHTML = Actresses.renderActressAndMovies(actress);
                })
            })
        }
        if (event.target.classList.contains('movie__name')) {
            const movieName = event.target.parentElement.querySelector('.movie__name').textContent
            var movieId
            api.postRequest('http://localhost:8080/movies/nameToId', {
                movieName: movieName
            }, (id) => {
                movieId = id
                api.getRequest(('http://localhost:8080/movies/' + movieId), (movie) => {
                    getAppContext().innerHTML = Movies.renderMovieAndClips(movie);
                })
            })
        }
        if (event.target.classList.contains('movie__image')) {
            const movieName = event.target.parentElement.querySelector('.movie__name').textContent
            var movieId
            api.postRequest('http://localhost:8080/movies/nameToId', {
                movieName: movieName
            }, (id) => {
                movieId = id
                api.getRequest(('http://localhost:8080/movies/' + movieId), (movie) => {
                    getAppContext().innerHTML = Movies.renderMovieAndClips(movie);
                })
            })
        }
        if (event.target.classList.contains('clip__name')) {
            const clipName = event.target.parentElement.querySelector('.clip__name').textContent
            var clipId
            api.postRequest('http://localhost:8080/clips/nameToId', {
                clipName: clipName
            }, (id) => {
                clipId = id
                api.getRequest(('http://localhost:8080/clips/' + clipId), (clip) => {
                    getAppContext().innerHTML = Clips.renderClip(clip);
                })
            })
        }
        if (event.target.classList.contains('tag_type')) {
            const tagName = event.target.parentElement.querySelector('.tag_type').textContent
            var tagId
            api.postRequest('http://localhost:8080/tags/nameToId', {
                tagName: tagName
            }, (id) => {
                tagId = id
                getAppContext().innerHTML = Tags.renderTag(tagId);

            })
        }
        // Removing Actresses // 
        if (event.target.classList.contains('remove__actress--submit')) {
            var actressId = event.target.parentElement.querySelector('.remove__list--actress').value
            api.postRequest('http://localhost:8080/actresses/removeActress', {
                actressId: actressId
            }, (actresses) => {
                getAppContext().innerHTML = Actresses.renderActresses(actresses);
            })

        }
        // // Removing Tags //
        // if (event.target.classList.contains('remove__tag--submit')) {
        //     var tagId = event.target.parentElement.querySelector('.remove__list--tag').value
        //     api.postRequest('http://localhost:8008/tags/removeTag', {
        //         tagId: tagId

        //     }, (tags) => {
        //         getAppContext().innerHTML = Tags.renderTags(tags);
        //     })
        // }
        // // Removing Movies // 
        // if (event.target.classList.contains('remove__movie--submit')) {
        //     var movieId = event.target.parentElement.querySelector('.remove__list--movie').value
        //     api.postRequest('http://localhost:8008/movies/removeMovie', {
        //         movieId: movieId

        //     }, (movies) => {
        //         getAppContext().innerHTML = Movies.renderMoviesAdd(movies);
        //     })
        // }
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
