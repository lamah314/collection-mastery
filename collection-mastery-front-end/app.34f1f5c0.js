parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WIWw":[function(require,module,exports) {
"use strict";function e(e,t,r){e.addEventListener(t,function(e){return r(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={on:e};exports.default=t;
},{}],"Yw/X":[function(require,module,exports) {
"use strict";function t(t,e){fetch(t).then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)})}function e(t,e,n){fetch(t,{method:"POST",body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){return n(t)}).catch(function(t){return console.log(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={getRequest:t,postRequest:e};exports.default=n;
},{}],"OiIl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./Add"));function n(e){return e&&e.__esModule?e:{default:e}}function c(e){return' \n    <div>\n        <ul class="clips">\n        '.concat(e.map(function(e){return' \n                    <li class="clip">\n                        <iframe class="clip__embedded clickable" width="560" height="315" src="'.concat(e.clipLocation,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                    </li>\n                    ')}).join(""),"\n        </ul>\n    </div>\n        ")}function i(n){return"\n    ".concat(c(n),'\n    <div class="user-input">\n        ').concat(e.default.addClip(),"\n    </div>\n        ")}function r(n){return' \n        <iframe class="landingClip" width="560" height="315" src="'.concat(n.clipLocation,'&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n        <h4 class="clip__rating">Average Rating: ').concat(n.avgRating,'</h4>\n        <h4 class="clip__comments">Comments</h4>\n            ').concat(Comments.renderClipComments(n),'\n        <div class="user-input">\n            ').concat(e.default.addRatingAndCommentClip(n),"\n        </div>\n        ")}var t={renderClipsAdd:i,renderClip:r,renderClips:c};exports.default=t;
},{"./Add":"gXrQ"}],"dUyw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=i(require("./Clips")),e=i(require("./Add"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n){return'\n    <div>\n    <ul class="albums">\n    '.concat(n.map(function(n){return'\n\n                        <li class="movie">\n                            <h5 class="movie__name clickable">'.concat(n.name,'</h5> \n                            <img class="movie__image clickable"src="').concat(n.image,'" />                       \n                        </li>\n                        \n                    ')}).join(""),"\n        </ul>\n        </div>\n        ")}function c(n){return"\n        ".concat(a(n),'\n        <div class="user-input">\n        ').concat(e.default.addMovie(),"\n    </div>\n        ")}function o(e){return'\n    <div>\n    <ul class="movies">\n    '.concat(e.map(function(e){return'\n        <div>\n        <h5 class="movie__name clickable" value='.concat(e.id,">").concat(e.title,'</h5>  \n        <img class= "movie__image clickable" src="').concat(e.image,'" /> \n                <li class="movie">\n                    \n                        ').concat(n.default.renderClips(e.Clips),"             \n                </li>\n        </div>\n            ")}).join(""),"\n    </ul>\n    </div>\n    ")}function t(n){return'\n        <h4 class="Movie__header">Movies</h4>\n        '.concat(this.renderMoviesAndClips(n),"\n    ")}function s(i){return'\n        <h2 class="movie__name">'.concat(i.name,'</h2> \n        <img class= "movie__image" src="').concat(i.image,'" />  \n            ').concat(n.default.renderClipsHeader(i.clips),'  \n        <br>\n        <h4 class="movie__rating">Average Rating: ').concat(i.avgRating,'</h4>\n        <h4 class="movie__comments">Comments</h4>\n            ').concat(Comments.renderMovieComments(i),' \n        <div class="user-input">\n            ').concat(e.default.addClipSpecific(i),"\n            ").concat(e.default.addRatingMovie(i),"\n            ").concat(e.default.addTagMovie(i),"\n        </div>           \n    ")}function r(n){return n.map(function(n){return'   \n            <option value="'.concat(n.id,'">').concat(n.name,"</option>    \n            ")}).join("")}var l={renderMovies:a,renderMoviesAdd:c,renderMoviesAndClips:o,renderMoviesHeaderAndClips:t,renderMovieAndClips:s,listMovies:r};exports.default=l;
},{"./Clips":"OiIl","./Add":"gXrQ"}],"gXrQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,n=a(require("./Actresses")),e=a(require("./Movies")),i=a(require("./Clips")),o=a(require("../utils/api/api-actions"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(){return o.default.getRequest("/actresses",function(t){document.querySelector(".add__movie-actress").innerHTML=n.default.listActresses(t)}),'\n    <section class="add__album">\n        <h3>Add Album</h3>\n        \n            <select type="select" class="add__movie--actress" placeholder="Pick Actress">\n            \n            </select>                 \n            <input type="text" class="add__movie--name" placeholder="title">\n            <input type="text" class="add__movie--image" placeholder="image">\n            <button class="add__movie--submit clickable">Add Movie</button>\n        </section>\n        '}function d(){return'\n    <section class="add__actress">\n        <h3>Add Actress</h3>\n        \n            <input type="select" class="add__actress--name" placeholder="Actress Name">\n            <input type="text" class="add__actress--image" placeholder="image">\n            <button class="add__actress--submit clickable">Add Actress</button>\n        </section> \n        '}function l(t){return'\n    <section class="add__movie">\n        <h3>Add Movie</h3>\n        \n        <input type="hidden" class="add__movie--actress" value="'.concat(t.id,'">\n                            \n            <input type="text" class="add__movie--name" placeholder="title">\n            <input type="text" class="add__movie--image" placeholder="image">\n            <button class="add__movieSpecific--submit clickable">Add Movie</button>\n        </section>\n        ')}function p(t){return'\n    <section class="add__clip">\n            <h3>Add Clip</h3>\n            <input type="hidden" class="add__clip--album" value="'.concat(t.id,'">\n            <input type="text" class="add__clip--title" placeholder="Clip title">\n            <button class="add__clipSpecific--submit clickable">Add Clip</button>\n        </section>\n        ')}function u(){return o.default.getRequest("/movies",function(t){document.querySelector(".add__clip--movie").innerHTML=e.default.listMovies(t)}),'\n    <section class="add__clip">\n        <h3>Add Clip</h3>\n        \n            <select type="select" class="add__clip--movie" placeholder="Pick Movie">\n            </select>\n            <input type="text" class="add__clip--clipLocation" placeholder="URL">\n            <button class="add__clip--submit clickable">Add Clip</button>\n        </section>\n        '}function _(t){return'\n    <section class="add__rating__clip">\n        <h3>Add Rating to Clip</h3>\n        <input type="hidden" class="add__clipId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__clipRating--submit clickable">Add Rating</button>\n    </section> \n        ')}function r(t){return'\n    <section class="add__rating__movie>\n        <h3>Add Rating to Movie</h3>\n        <input type="hidden" class="add__movieId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__movieRating--submit clickable">Add Rating</button>\n    </section> \n        ')}function v(t){return'\n    <section class="add__rating__actress">\n        <h3>Add Rating to Actress</h3>\n        <input type="hidden" class="add__actressId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__actressRating--submit clickable">Add Rating</button>\n    </section> \n        ')}function b(t){return'\n    <section class="add__tag__actress">\n        <h3>Add Tag to Actress</h3>\n        <input type="hidden" class="add__actressId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__actressRating--submit clickable">Add Tag</button>\n    </section> \n        ')}function g(t){return'\n    <section class="add__tag__movie">\n        <h3>Add Tag to Movie</h3>\n        <input type="hidden" class="add__movieId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__movieRating--submit clickable">Add Tag</button>\n    </section> \n        ')}function h(t){return'\n    <section class="add__tag__clip">\n        <h3>Add Tag to Clip</h3>\n        <input type="hidden" class="add__clipId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__clipRating--submit clickable">Add Tag</button>\n    </section> \n        ')}var m=(s(t={addActress:d,addMovie:c,addClip:u,addRatingActress:v,addRatingMovie:r,addRatingClip:_},"addRatingActress",v),s(t,"addClipSpecific",p),s(t,"addMovieSpecific",l),s(t,"addTagActress",b),s(t,"addTagMovie",g),s(t,"addTagClip",h),t);exports.default=m;
},{"./Actresses":"OlKv","./Movies":"dUyw","./Clips":"OiIl","../utils/api/api-actions":"Yw/X"}],"mihS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e(require("./Clips")),t=e(require("./Add"));function e(n){return n&&n.__esModule?n:{default:n}}function a(n){return' \n    <div>\n        <ul class="tags">\n        '.concat(n.map(function(n){return' \n                    <li class="tag">\n                    <h5 class="tag_type clickable">'.concat(n.tag,"</h5>\n\n                    </li>\n                    ")}).join(""),"\n        </ul>\n    </div>\n        ")}function r(n){return"\n            ".concat(a(n),'\n            <div class="user-input">\n            ').concat(t.default.addTag(),"\n        </div>\n            ")}function u(n){return n.map(function(n){return'   \n                <option value="'.concat(tag.id,'">').concat(tag.tag,"</option>    \n                ")}).join("")}var c={renderTags:a,renderTagsAdd:r};exports.default=c;
},{"./Clips":"OiIl","./Add":"gXrQ"}],"OlKv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("./Add")),n=c(require("./Movies")),s=c(require("./Tags"));function c(e){return e&&e.__esModule?e:{default:e}}function a(n){return' \n    <div>\n        <ul class="actresses">\n        '.concat(n.map(function(e){return' \n                    <li class="actress">\n                        <h5 class="actress__name clickable">'.concat(e.name,'</h5>\n                        <img class="actress__image clickable"src="').concat(e.image,'" /> \n                    </li>\n                    ')}).join(""),'\n        </ul>\n    </div>\n    <div class="user-input">\n    ').concat(e.default.addActress(),"\n</div>\n        ")}function t(e){return e.map(function(e){return'   \n            <option value="'.concat(e.id,'">').concat(e.name,"</option>    \n            ")}).join("")}function r(s){return' \n    <div>\n        <h5 class="actress__name clickable">'.concat(actress.name,'</h5>\n        <img class="actress__image clickable"src="').concat(actress.image,'" /> \n        ').concat(n.default.renderMovies(actress.movies),'\n    </div>\n    <div class="user-input">\n        ').concat(e.default.addRatingActress(actress),"\n    </div>\n        ")}var i={renderActresses:a,listActresses:t,renderActressAndMovies:r};exports.default=i;
},{"./Add":"gXrQ","./Movies":"dUyw","./Tags":"mihS"}],"2KtP":[function(require,module,exports) {
"use strict";function e(){return'\n        <h1 class="header-title">Femme Fatale</h1>\n        <nav class="header-nav">\n            <ul class="nav-list">\n                <li class="nav-actress clickable">Actresses</li>\n                <li class="nav-movie clickable">Movies</li>\n                <li class="nav-clip clickable">Clips</li>\n            </ul>\n        <nav>\n        '}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"jtGo":[function(require,module,exports) {
"use strict";function e(){return'\n    <div class="landingVideo-container">\n    <iframe class="landingVideo" width="560" height="315" src="https://www.youtube.com/embed/BWuafJtMrBE?start=201&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </div>\n    '}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"9o4K":[function(require,module,exports) {
"use strict";function e(){return"\n    <p>Anthony and Alicia &copy2019</p>\n        "}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"GFX4":[function(require,module,exports) {
"use strict";var e=u(require("./utils/events/event-actions")),t=u(require("./utils/api/api-actions")),n=u(require("./Components/Actresses")),s=u(require("./Components/Movies")),r=u(require("./Components/Clips")),a=u(require("./Components/header")),i=u(require("./Components/landingPage")),o=u(require("./Components/footer"));function u(e){return e&&e.__esModule?e:{default:e}}function c(){f().innerHTML=(0,a.default)(),e.default.on(f(),"click",function(){event.target.classList.contains("header-title")&&(m().innerHTML=(0,i.default)()),event.target.classList.contains("nav-actress")&&t.default.getRequest("http://localhost:8080/actresses",function(e){m().innerHTML=n.default.renderActresses(e)}),event.target.classList.contains("nav-movie")&&t.default.getRequest("http://localhost:8080/movies",function(e){m().innerHTML=s.default.renderMoviesAdd(e)}),event.target.classList.contains("nav-clip")&&t.default.getRequest("http://localhost:8080/clips",function(e){m().innerHTML=r.default.renderClipsAdd(e)})})}function l(){m().innerHTML=(0,i.default)(),e.default.on(m(),"click",function(){if(event.target.classList.contains("actress__name")){var e=event.target.parentElement.querySelector(".actress__name").textContent;t.default.postRequest("/actresses/nameToId",{actressName:e},function(e){r=e,t.default.getRequest("/actresses/"+r,function(e){m().innerHTML=n.default.renderActressAndMovies(e)})})}if(event.target.classList.contains("actress__image")){var r,a=event.target.parentElement.querySelector(".actress__name").textContent;t.default.postRequest("/actresses/nameToId",{actressName:a},function(e){r=e,t.default.getRequest("/actresses/"+r,function(e){m().innerHTML=n.default.renderActressAndMovies(e)})})}if(event.target.classList.contains("movie__name")){var i,o=event.target.parentElement.querySelector(".movie__name").textContent;t.default.postRequest("/movies/nameToId",{movieName:o},function(e){i=e,t.default.getRequest("/movies/"+i,function(e){m().innerHTML=s.default.renderActressMovieAndClips(actress)})})}})}function d(){v().innerHTML=(0,o.default)()}function f(){return document.querySelector("#header")}function m(){return document.querySelector("#app")}function v(){return document.querySelector("#footer")}c(),l(),d();
},{"./utils/events/event-actions":"WIWw","./utils/api/api-actions":"Yw/X","./Components/Actresses":"OlKv","./Components/Movies":"dUyw","./Components/Clips":"OiIl","./Components/header":"2KtP","./Components/landingPage":"jtGo","./Components/footer":"9o4K"}]},{},["GFX4"], null)
//# sourceMappingURL=/app.34f1f5c0.js.map