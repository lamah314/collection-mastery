import events from '/js/utils/events/event-actions'
import api from '/js/utils/api/api-actions'
import Actresses from '/js/Components/Actresses'
import Movies from '/js/Components/Movies'
import Clips from '/js/Components/Clips'
import Header from '/js/Components/header'
import LandingPage from '/js/Components/landingPage'
import Footer from '/js/Components/footer'

//header()
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
                // api.getRequest('/actresses', (actresses) => { // Original on line 26, change to specific LOCALHOST:8080
                getAppContext().innerHTML = Actresses.renderActresses(actresses);
            })
        }
        if (event.target.classList.contains('nav-movie')) {
            api.getRequest('http://localhost:8080/movies', movies => {
                // api.getRequest('/movies', (movies) => { // Original on line 32, change to specific LOCALHOST:8080
                getAppContext().innerHTML = Movies.renderMoviesAdd(movies);
            })
        }
        if (event.target.classList.contains('nav-clip')) {
            api.getRequest('/clips', (clips) => {
                getAppContext().innerHTML = Clips.renderClipsAdd(clips);
            })
        }
    })
}

function main() {

    getAppContext().innerHTML = LandingPage();

    // events.on(getAppContext(), 'click', () => {
    //     if (event.target.classList.contains('artist__name')) {
    //         const artistName = event.target.parentElement.querySelector('.artist__name').textContent
    //         var artistId
    //         api.postRequest('/artists/nameToId', {
    //             artistName: artistName
    //         }, (id)=> 
    //         {
    //             artistId = id
    //             api.getRequest(('/artists/' + artistId), (artist) => {
    //                 getAppContext().innerHTML = Artists.renderArtistAndAlbumsAndSongs(artist);
    //             })
    //         })
    //     }
    //     if (event.target.classList.contains('actress__image')) {
    //         const artistName = event.target.parentElement.querySelector('.artist__name').textContent
    //         var artistId
    //         api.postRequest('/actresses/nameToId', {
    //             artistName: artistName
    //         }, (id)=> 
    //         {
    //             artistId = id
    //             api.getRequest(('/artists/' + artistId), (artist) => {
    //                 getAppContext().innerHTML = Artists.renderArtistAndAlbumsAndSongs(artist);
    //             })
    //         })
    //     }

    // })
}

function footer() {

    getAppContext().innerHTML = Footer();

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