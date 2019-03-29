// import events from './Utils/Events/event-actions'
// import api from './Utils/API/api-actions'
// import Artists from './Components/Artists'
// import Albums from './Components/Albums'
// import Songs from './Components/Songs'
// import Header from './Components/header'
// import LandingPage from './Components/landingPage'

header()
main()

function header() {
    getHeaderContext().innerHTML = Header()

    // events.on(getHeaderContext(), 'click', () => {
    //     if (event.target.classList.contains('logo')) {
    //         api.getRequest('/artists', (artists) => {
    //             getAppContext().innerHTML = LandingPage();
    //         })
    //     }
    //     if (event.target.classList.contains('nav-artist')) {
    //         api.getRequest('/artists', (artists) => {
    //             getAppContext().innerHTML = Artists.renderArtists(artists);
    //         })
    //     }
    //     if (event.target.classList.contains('nav-album')) {
    //         api.getRequest('/albums', (albums) => {
    //             getAppContext().innerHTML = Albums.renderAlbumsAdd(albums);
    //         })
    //     }
    //     if (event.target.classList.contains('nav-song')) {
    //         api.getRequest('/songs', (songs) => {
    //             getAppContext().innerHTML = Songs.renderSongsAdd(songs);
    //         })
    //     }
    // })  
}

function main() {

    // api.getRequest('/artists', artists => {
    //     getAppContext().innerHTML = LandingPage();
    // })

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
    //     if (event.target.classList.contains('artist__image')) {
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
       
    // })
}

function getHeaderContext() {
    return document.querySelector("#header");
}

function getAppContext() {
    return document.querySelector("#app");
}