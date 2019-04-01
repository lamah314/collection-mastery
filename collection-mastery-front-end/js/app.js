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
                getAppContext().innerHTML = Clips.renderClipsAdd(clips);
            })
        }
        if (event.target.classList.contains('nav-tag')) {
            api.getRequest('http://localhost:8080/tags', tags => {
                getAppContext().innerHTML = Tags.renderTagsAdd(tags);
            })
        }
    })
}

function main() {

    getAppContext().innerHTML = LandingPage();

    events.on(getAppContext(), 'click', () => {
        //Go to specific Actress
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
         //Go to specific Actress
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
         //Go to specific Movie
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
         //Go to specific Movie
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
         //Go to specific Clip
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
         //Go to specific Tag
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
        // Adding Actress
        if (event.target.classList.contains('add__actress--submit')) {
            const name = event.target.parentElement.querySelector('.add__actress--name').value
            const image = event.target.parentElement.querySelector('.add__actress--image').value
            api.postRequest('http://localhost:8080/actresses/addActress', {
                name: name,
                image: image
            }, (actresses) => {
                getAppContext().innerHTML = Actresses.renderActresses(actresses);
            })
        }

        // Adding Movie
        if (event.target.classList.contains('add__movie--submit')) {
            const actressId = event.target.parentElement.querySelector('.add__movie--actress').value
            const name = event.target.parentElement.querySelector('.add__movie--name').value
            const image = event.target.parentElement.querySelector('.add__movie--image').value
            api.postRequest('http://localhost:8080/movies/addMovie', {
                actressId: actressId,
                name: name,
                image: image
            }, (movies) => {
                getAppContext().innerHTML = Movies.renderMoviesAdd(movies);
            })
        }

        // Adding Movie Specific
        if (event.target.classList.contains('add__movieSpecific--submit')) {
            const actressId = event.target.parentElement.querySelector('.add__movie--actress').value
            const name = event.target.parentElement.querySelector('.add__movie--name').value
            const image = event.target.parentElement.querySelector('.add__movie--image').value
            api.postRequest('http://localhost:8080/movies/addMovieSpecific', {
                actressId: actressId,
                name: name,
                image: image
            }, (actress) => {
                getAppContext().innerHTML = Actresses.renderActressAndMovies(actress);
            })
        }

         // Adding Clip
         if (event.target.classList.contains('add__clip--submit')) {
            const movieId = event.target.parentElement.querySelector('.add__clip--movie').value
            const name = event.target.parentElement.querySelector('.add__clip--name').value
            const clipLocation = event.target.parentElement.querySelector('.add__clip--clipLocation').value
            api.postRequest('http://localhost:8080/clips/addClip', {
                movieId: movieId,
                name: name,
                clipLocation: clipLocation
            }, (clips) => {
                getAppContext().innerHTML = Clips.renderClipsAdd(clips);
            })
        }

        // Adding Clip Specific
        if (event.target.classList.contains('add__clipSpecific--submit')) {
            const movieId = event.target.parentElement.querySelector('.add__clip--movie').value
            const name = event.target.parentElement.querySelector('.add__clip--name').value
            const clipLocation = event.target.parentElement.querySelector('.add__clip--clipLocation').value
            api.postRequest('http://localhost:8080/clips/addClipSpecific', {
                movieId: movieId,
                name: name,
                clipLocation: clipLocation
            }, (movie) => {
                getAppContext().innerHTML = Movies.renderMovieAndClips(movie);
            })
        }

        // Adding Tag
        if (event.target.classList.contains('add__tag--submit')) {
            const tag = event.target.parentElement.querySelector('.add__tag--tag').value
            api.postRequest('http://localhost:8080/tags/addTag', {
                tag:tag
            }, (tags) => {
                getAppContext().innerHTML = Tags.renderTagsAdd(tags);
            })
        }

        // Adding Rating To Actress
        if (event.target.classList.contains('add__actressRating--submit')) {
            const actressId = event.target.parentElement.querySelector('.add__actressId').value
            const rating = event.target.parentElement.querySelector('.add__rating').value
            api.postRequest('http://localhost:8080/actresses/addRating', {
                actressId:actressId,
                rating:rating
            }, (actress) => {
                getAppContext().innerHTML = Actresses.renderActressAndMovies(actress);
            })
        }

        // Adding Rating To Movie
        if (event.target.classList.contains('add__movieRating--submit')) {
            const movieId = event.target.parentElement.querySelector('.add__movieId').value
            const rating = event.target.parentElement.querySelector('.add__rating').value
            api.postRequest('http://localhost:8080/movies/addRating', {
                movieId:movieId,
                rating:rating
            }, (movie) => {
                getAppContext().innerHTML = Movies.renderMovieAndClips(movie);
            })
        }

        // Adding Rating To Clip
        if (event.target.classList.contains('add__clipRating--submit')) {
            const clipId = event.target.parentElement.querySelector('.add__clipId').value
            const rating = event.target.parentElement.querySelector('.add__rating').value
            api.postRequest('http://localhost:8080/clips/addRating', {
                clipId:clipId,
                rating:rating
            }, (clip) => {
                getAppContext().innerHTML = Clips.renderClip(clip);
            })
        }

        // Adding Tag To Actress
        if (event.target.classList.contains('add__actressTag--submit')) {
            const actressId = event.target.parentElement.querySelector('.add__actressId').value
            const tagId = event.target.parentElement.querySelector('.add__tag').value
            api.postRequest('http://localhost:8080/actresses/addTag', {
                actressId:actressId,
                tagId:tagId
            }, (actress) => {
                getAppContext().innerHTML = Actresses.renderActressAndMovies(actress);
            })
        }

        // Adding Tag To Movie
        if (event.target.classList.contains('add__movieTag--submit')) {
            const movieId = event.target.parentElement.querySelector('.add__movieId').value
            const tagId = event.target.parentElement.querySelector('.add__tag').value
            api.postRequest('http://localhost:8080/movies/addTag', {
                movieId:movieId,
                tagId:tagId
            }, (movie) => {
                getAppContext().innerHTML = Movies.renderMovieAndClips(movie);
            })
        }

        // Adding Tag To Clip
        if (event.target.classList.contains('add__clipTag--submit')) {
            const clipId = event.target.parentElement.querySelector('.add__clipId').value
            const tagId = event.target.parentElement.querySelector('.add__tag').value
            api.postRequest('http://localhost:8080/clips/addTag', {
                clipId:clipId,
                tagId:tagId
            }, (clip) => {
                getAppContext().innerHTML = Clips.renderClip(clip);
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
        // Removing Movies // 
        if (event.target.classList.contains('remove__movie--submit')) {
            var movieId = event.target.parentElement.querySelector('.remove__list--movie').value
            api.postRequest('http://localhost:8080/movies/removeMovie', {
                movieId: movieId
            }, (movies) => {
                getAppContext().innerHTML = Movies.renderMoviesAdd(movies);
            })
        }
        // Removing Clips // 
        if (event.target.classList.contains('remove__clip--submit')) {
            var clipId = event.target.parentElement.querySelector('.remove__list--clip').value
            api.postRequest('http://localhost:8080/clips/removeClip', {
                clipId: clipId
            }, (clips) => {
                getAppContext().innerHTML = Clips.renderClipsAdd(clips);
            })
        }
        // Removing Tags //
        if (event.target.classList.contains('remove__tag--submit')) {
            var tagId = event.target.parentElement.querySelector('.remove__list--tag').value
            api.postRequest('http://localhost:8080/tags/removeTag', {
                tagId: tagId
            }, (tags) => {
                getAppContext().innerHTML = Tags.renderTagsAdd(tags);
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
