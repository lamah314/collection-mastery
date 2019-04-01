parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WIWw":[function(require,module,exports) {
"use strict";function e(e,t,r){e.addEventListener(t,function(e){return r(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={on:e};exports.default=t;
},{}],"Yw/X":[function(require,module,exports) {
"use strict";function t(t,e){fetch(t).then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)})}function e(t,e,n){fetch(t,{method:"POST",body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){return n(t)}).catch(function(t){return console.log(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={getRequest:t,postRequest:e};exports.default=n;
},{}],"mihS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("./Actresses")),t=s(require("./Movies")),n=s(require("./Clips")),a=s(require("./Add")),r=s(require("../utils/api/api-actions")),i=s(require("./Remove"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return' \n    <div>\n        <ul class="tags">\n        '.concat(e.map(function(e){return' \n                    <li class="tag">\n                    <h5 class="tag_type clickable">'.concat(e.tag,"</h5>\n                    </li>\n                    ")}).join(""),"\n        </ul>\n    </div>\n        ")}function u(e){return"\n        ".concat(c(e),'\n        <div class="user-input">\n            ').concat(a.default.addTag(),"\n            ").concat(i.default.removeTag(),"\n        </div>\n        ")}function o(e){return e.map(function(e){return'   \n            <option value="'.concat(e.id,'">').concat(e.tag,"</option>    \n            ")}).join("")}function d(a){return r.default.getRequest("http://localhost:8080/tags/"+a+"/actress",function(t){document.querySelector(".tag--actress").innerHTML=e.default.renderActressesHeader(t)}),r.default.getRequest("http://localhost:8080/tags/"+a+"/movie",function(e){document.querySelector(".tag--movie").innerHTML=t.default.renderMoviesHeader(e)}),r.default.getRequest("http://localhost:8080/tags/"+a+"/clip",function(e){document.querySelector(".tag--clip").innerHTML=n.default.renderClipsHeader(e)}),' \n    <div>\n        <div class="tag--actress"></div>\n        <div class="tag--movie"></div>\n        <div class="tag--clip"></div>\n    </div>  \n        '}var l={renderTags:c,renderTagsAdd:u,listTags:o,renderTag:d};exports.default=l;
},{"./Actresses":"OlKv","./Movies":"dUyw","./Clips":"OiIl","./Add":"gXrQ","../utils/api/api-actions":"Yw/X","./Remove":"VwNU"}],"VwNU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("./Actresses")),t=c(require("./Tags")),s=c(require("./Movies")),o=c(require("./Clips")),l=c(require("../utils/api/api-actions"));function c(e){return e&&e.__esModule?e:{default:e}}function n(){return l.default.getRequest("http://localhost:8080/actresses",function(t){document.querySelector(".remove__list--actress").innerHTML=e.default.listActresses(t)}),'\n    <section class="add__actress">\n        <h3>Remove an Actress</h3>\n        \n            <select type="select" class="remove__list--actress" placeholder="Pick Actress">\n            </select>                 \n            <button class="remove__actress--submit clickable">Remove Actress</button>\n        </section>\n        '}function i(){return l.default.getRequest("http://localhost:8080/tags",function(e){document.querySelector(".remove__list--tag").innerHTML=t.default.listTags(e)}),'\n    <section class="add__tag">\n        <h3>Remove a Tag</h3>\n        \n            <select type="select" class="remove__list--tag" placeholder="Pick Tag">\n            </select>                 \n            <button class="remove__tag--submit clickable">Remove Tag</button>\n        </section>\n        '}function r(){return l.default.getRequest("http://localhost:8080/movies",function(e){document.querySelector(".remove__list--movie").innerHTML=s.default.listMovies(e)}),'\n    <section class="add__movie">\n        <h3>Remove a Movie</h3>\n        \n            <select type="select" class="remove__list--movie" placeholder="Pick Movie">\n            </select>                 \n            <button class="remove__movie--submit clickable">Remove Movie</button>\n        </section>\n        '}function a(){return l.default.getRequest("http://localhost:8080/clips",function(e){document.querySelector(".remove__list--clip").innerHTML=o.default.listClips(e)}),'\n    <section class="add__movie">\n        <h3>Remove a Movie</h3>\n        \n            <select type="select" class="remove__list--clip" placeholder="Pick Clip">\n            </select>                 \n            <button class="remove__clip--submit clickable">Remove Clip</button>\n        </section>\n        '}var u={removeActress:n,removeTag:i,removeMovie:r,removeClip:a};exports.default=u;
},{"./Actresses":"OlKv","./Tags":"mihS","./Movies":"dUyw","./Clips":"OiIl","../utils/api/api-actions":"Yw/X"}],"OiIl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("./Add")),n=c(require("./Remove")),a=c(require("./Tags"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return' \n    <div>\n        <ul class="clips">\n        '.concat(e.map(function(e){return' \n                    <li class="clip">\n                        <h5 class="clip__name clickable">'.concat(e.name,'</h5> \n                        <iframe class="clip__embedded clickable" width="560" height="315" src="').concat(e.clipLocation,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                    </li>\n                    ')}).join(""),"\n        </ul>\n    </div>\n        ")}function r(e){return'\n    <div>\n    <h4 class="clip__header">Clips</h4>\n    '.concat(i(e),"\n    ")}function t(a){return"\n    ".concat(i(a),'\n    <div class="user-input">\n        ').concat(e.default.addClip(),"\n        ").concat(n.default.removeClip(),"\n    </div>\n        ")}function l(n){return' \n        <iframe class="landingClip" width="560" height="315" src="'.concat(n.clipLocation,'&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n        <h4 class="clip__rating">Average Rating: ').concat(n.avgRating,'</h4>\n        <h4 class="clip__tags">Tags</h4>\n            ').concat(a.default.renderTags(n.tags),'\n        <div class="user-input">\n            ').concat(e.default.addRatingClip(n),"\n            ").concat(e.default.addTagToClip(n),"\n        </div>\n        ")}function o(e){return e.map(function(e){return'   \n            <option value="'.concat(e.id,'">').concat(e.name,"</option>    \n            ")}).join("")}var d={renderClipsAdd:t,renderClip:l,renderClips:i,renderClipsHeader:r,listClips:o};exports.default=d;
},{"./Add":"gXrQ","./Remove":"VwNU","./Tags":"mihS"}],"dUyw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=c(require("./Clips")),e=c(require("./Add")),i=c(require("./Remove")),a=c(require("./Tags"));function c(n){return n&&n.__esModule?n:{default:n}}function t(n){return'\n    <div>\n    <ul class="albums">\n    '.concat(n.map(function(n){return'\n\n                        <li class="movie">\n                            <h5 class="movie__name clickable">'.concat(n.name,'</h5> \n                            <img class="movie__image clickable"src="').concat(n.image,'" />                       \n                        </li>\n                        \n                    ')}).join(""),"\n        </ul>\n        </div>\n        ")}function o(n){return"\n        ".concat(t(n),'\n        <div class="user-input">\n        ').concat(e.default.addMovie(),"\n        ").concat(i.default.removeMovie(),"\n    </div>\n        ")}function r(e){return'\n    <div>\n    <ul class="movies">\n    '.concat(e.map(function(e){return'\n        <div>\n        <h5 class="movie__name clickable" value='.concat(e.id,">").concat(e.title,'</h5>  \n        <img class= "movie__image clickable" src="').concat(e.image,'" /> \n                <li class="movie">\n                    \n                        ').concat(n.default.renderClips(e.Clips),"             \n                </li>\n        </div>\n            ")}).join(""),"\n    </ul>\n    </div>\n    ")}function s(n){return'\n        <h4 class="Movie__header">Movies</h4>\n        '.concat(this.renderMoviesAndClips(n),"\n    ")}function l(n){return'\n        <h4 class="Movie__header">Movies</h4>\n        '.concat(this.renderMovies(n),"\n    ")}function d(i){return'\n        <h2 class="movie__name">'.concat(i.name,'</h2> \n        <h4 class="movie__rating">Average Rating: ').concat(i.avgRating,'</h4>\n        <h4 class="movie__tags">Tags</h4>\n            ').concat(a.default.renderTags(i.tags),'\n        <img class= "movie__image" src="').concat(i.image,'" />  \n            ').concat(n.default.renderClipsHeader(i.clips),'  \n        <br>\n        <h4 class="movie__rating">Average Rating: ').concat(i.avgRating,'</h4> \n        <div class="user-input">\n            ').concat(e.default.addClipSpecific(i),"\n            ").concat(e.default.addRatingMovie(i),"\n            ").concat(e.default.addTagToMovie(i),"\n        </div>           \n    ")}function u(n){return n.map(function(n){return'   \n            <option value="'.concat(n.id,'">').concat(n.name,"</option>    \n            ")}).join("")}var v={renderMovies:t,renderMoviesAdd:o,renderMoviesAndClips:r,renderMoviesHeaderAndClips:s,renderMoviesHeader:l,renderMovieAndClips:d,listMovies:u};exports.default=v;
},{"./Clips":"OiIl","./Add":"gXrQ","./Remove":"VwNU","./Tags":"mihS"}],"gXrQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,e=s(require("./Actresses")),n=s(require("./Movies")),a=s(require("./Clips")),i=s(require("./Tags")),c=s(require("../utils/api/api-actions"));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return'\n    <section class="add__actress">\n        <h3>Add Actress</h3>\n        \n            <input type="select" class="add__actress--name" placeholder="Actress Name">\n            <input type="text" class="add__actress--image" placeholder="image">\n            <button class="add__actress--submit clickable">Add Actress</button>\n        </section> \n        '}function l(){return c.default.getRequest("http://localhost:8080/actresses",function(t){document.querySelector(".add__movie--actress").innerHTML=e.default.listActresses(t)}),'\n    <section class="add__album">\n        <h3>Add Movie</h3>\n        \n            <select type="select" class="add__movie--actress" placeholder="Pick Actress">\n            \n            </select>                 \n            <input type="text" class="add__movie--name" placeholder="title">\n            <input type="text" class="add__movie--image" placeholder="image">\n            <button class="add__movie--submit clickable">Add Movie</button>\n        </section>\n        '}function u(){return c.default.getRequest("http://localhost:8080/movies",function(t){document.querySelector(".add__clip--movie").innerHTML=n.default.listMovies(t)}),'\n    <section class="add__clip">\n        <h3>Add Clip</h3>\n        \n            <select type="select" class="add__clip--movie" placeholder="Pick Movie">\n            </select>\n            <input type="text" class="add__clip--name" placeholder="Name">\n            <input type="text" class="add__clip--clipLocation" placeholder="URL">\n            <button class="add__clip--submit clickable">Add Clip</button>\n        </section>\n        '}function p(t){return'\n    <section class="add__movie">\n        <h3>Add Movie to '.concat(t.name,'</h3>\n        \n        <input type="hidden" class="add__movie--actress" value="').concat(t.id,'">\n                            \n        <input type="text" class="add__movie--name" placeholder="title">\n        <input type="text" class="add__movie--image" placeholder="image">\n        <button class="add__movieSpecific--submit clickable">Add Movie</button>\n        </section>\n        ')}function _(t){return'\n    <section class="add__clip">\n            <h3>Add Clip to '.concat(t.name,'</h3>\n            <input type="hidden" class="add__clip--movie" value="').concat(t.id,'">\n            <input type="text" class="add__clip--name" placeholder="Name">\n            <input type="text" class="add__clip--clipLocation" placeholder="Clip Location">\n            <button class="add__clipSpecific--submit clickable">Add Clip</button>\n    </section>\n        ')}function r(t){return'\n    <section class="add__rating__clip">\n        <h3>Add Rating to Clip</h3>\n        <input type="hidden" class="add__clipId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__clipRating--submit clickable">Add Rating</button>\n    </section> \n        ')}function g(t){return'\n    <section class="add__rating__movie">\n        <h3>Add Rating to Movie</h3>\n        <input type="hidden" class="add__movieId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__movieRating--submit clickable">Add Rating</button>\n    </section> \n        ')}function h(t){return'\n    <section class="add__rating__actress">\n        <h3>Add Rating to Actress</h3>\n        <input type="hidden" class="add__actressId" value="'.concat(t.id,'">\n        <select type="select" class="add__rating" placeholder="Choose Rating">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class="add__actressRating--submit clickable">Add Rating</button>\n    </section> \n        ')}function v(){return'\n    <section class="add__tag__actress">\n        <h3>Add a Tag</h3>\n        <input type="text" class="add__tag--tag" placeholder="tag">\n        <button class="add__tag--submit clickable">Add Tag</button>\n    </section> \n        '}function m(t){return c.default.getRequest("http://localhost:8080/tags",function(t){document.querySelector(".add__tag").innerHTML=i.default.listTags(t)}),'\n    <section class="add__tag__actress">\n        <h3>Add Tag to Actress</h3>\n        <input type="hidden" class="add__actressId" value="'.concat(t.id,'">\n        <select type="select" class="add__tag" placeholder="Choose Tag">\n        </select>\n        <button class="add__actressTag--submit clickable">Add Tag</button>\n    </section> \n        ')}function b(t){return c.default.getRequest("http://localhost:8080/tags",function(t){document.querySelector(".add__tag").innerHTML=i.default.listTags(t)}),'\n    <section class="add__tag__movie">\n        <h3>Add Tag to Movie</h3>\n        <input type="hidden" class="add__movieId" value="'.concat(t.id,'">\n        <select type="select" class="add__tag" placeholder="Choose Tag">\n            \n        </select>\n        <button class="add__movieTag--submit clickable">Add Tag</button>\n    </section> \n        ')}function f(t){return c.default.getRequest("http://localhost:8080/tags",function(t){document.querySelector(".add__tag").innerHTML=i.default.listTags(t)}),'\n    <section class="add__tag__clip">\n        <h3>Add Tag to Clip</h3>\n        <input type="hidden" class="add__clipId" value="'.concat(t.id,'">\n        <select type="select" class="add__tag" placeholder="Choose Tag">\n    \n        </select>\n        <button class="add__clipTag--submit clickable">Add Tag</button>\n    </section> \n        ')}var A=(d(t={addActress:o,addMovie:l,addClip:u,addRatingActress:h,addRatingMovie:g,addRatingClip:r},"addRatingActress",h),d(t,"addClipSpecific",_),d(t,"addMovieSpecific",p),d(t,"addTag",v),d(t,"addTagToActress",m),d(t,"addTagToMovie",b),d(t,"addTagToClip",f),t);exports.default=A;
},{"./Actresses":"OlKv","./Movies":"dUyw","./Clips":"OiIl","./Tags":"mihS","../utils/api/api-actions":"Yw/X"}],"OlKv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("./Add")),n=c(require("./Remove")),s=c(require("./Movies")),a=c(require("./Tags"));function c(e){return e&&e.__esModule?e:{default:e}}function t(s){return' \n    <div>\n        <ul class="actresses">\n        '.concat(s.map(function(e){return' \n                    <li class="actress">\n                        <h5 class="actress__name clickable">'.concat(e.name,'</h5>\n                        <img class="actress__image clickable"src="').concat(e.image,'" /> \n                    </li>\n                    ')}).join(""),'\n        </ul>\n    </div>\n    <div class="user-input"> \n    ').concat(e.default.addActress(),"\n    ").concat(n.default.removeActress(),"\n</div>\n        ")}function r(e){return'\n        <h4 class="Actress__header">Actresses</h4>\n        <div>\n        <ul class="actresses">\n        '.concat(e.map(function(e){return' \n                    <li class="actress">\n                        <h5 class="actress__name clickable">'.concat(e.name,'</h5>\n                        <img class="actress__image clickable"src="').concat(e.image,'" /> \n                    </li>\n                    ')}).join(""),"\n        </ul>\n    </div>\n    ")}function i(e){return e.map(function(e){return'   \n            <option value="'.concat(e.id,'">').concat(e.name,"</option>    \n            ")}).join("")}function l(n){return' \n    <div>\n        <h5 class="actress__name clickable">'.concat(n.name,'</h5>\n        <h4 class="actress__rating">Average Rating: ').concat(n.avgRating,'</h4>\n        <h4 class="actress__tags">Tags</h4>\n            ').concat(a.default.renderTags(n.tags),'\n        <img class="actress__image clickable"src="').concat(n.image,'" /> \n        ').concat(s.default.renderMoviesHeader(n.movies),'\n    </div>\n    <div class="user-input">\n        ').concat(e.default.addMovieSpecific(n),"\n        ").concat(e.default.addRatingActress(n),"\n        ").concat(e.default.addTagToActress(n),"\n    </div>\n        ")}var o={renderActresses:t,renderActressesHeader:r,listActresses:i,renderActressAndMovies:l};exports.default=o;
},{"./Add":"gXrQ","./Remove":"VwNU","./Movies":"dUyw","./Tags":"mihS"}],"2KtP":[function(require,module,exports) {
"use strict";function l(){return'\n        <h1 class="header-title">Femme Fatale</h1>\n        <nav class="header-nav">\n            <ul class="nav-list">\n                <li class="nav-actress clickable">Actresses</li>\n                <li class="nav-movie clickable">Movies</li>\n                <li class="nav-clip clickable">Clips</li>\n                <li class="nav-tag clickable">Tags</li>\n            </ul>\n        <nav>\n        '}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;
},{}],"jtGo":[function(require,module,exports) {
"use strict";function e(){return'\n    <div class="landingVideo-container">\n    <iframe class="landingVideo" width="560" height="315" src="https://www.youtube.com/embed/BWuafJtMrBE?start=201&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </div>\n    '}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"9o4K":[function(require,module,exports) {
"use strict";function e(){return"\n    <p>Anthony and Alicia &copy2019</p>\n        "}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"GFX4":[function(require,module,exports) {
"use strict";var e=c(require("./utils/events/event-actions")),t=c(require("./utils/api/api-actions")),a=c(require("./Components/Actresses")),n=c(require("./Components/Movies")),r=c(require("./Components/Clips")),s=c(require("./Components/Tags")),i=c(require("./Components/header")),l=c(require("./Components/landingPage")),o=c(require("./Components/footer"));function c(e){return e&&e.__esModule?e:{default:e}}function d(){p().innerHTML=(0,i.default)(),e.default.on(p(),"click",function(){event.target.classList.contains("header-title")&&(m().innerHTML=(0,l.default)()),event.target.classList.contains("nav-actress")&&t.default.getRequest("http://localhost:8080/actresses",function(e){m().innerHTML=a.default.renderActresses(e)}),event.target.classList.contains("nav-movie")&&t.default.getRequest("http://localhost:8080/movies",function(e){m().innerHTML=n.default.renderMoviesAdd(e)}),event.target.classList.contains("nav-clip")&&t.default.getRequest("http://localhost:8080/clips",function(e){m().innerHTML=r.default.renderClipsAdd(e)}),event.target.classList.contains("nav-tag")&&t.default.getRequest("http://localhost:8080/tags",function(e){m().innerHTML=s.default.renderTagsAdd(e)})})}function u(){m().innerHTML=(0,l.default)(),e.default.on(m(),"click",function(){if(event.target.classList.contains("actress__name")){var e=event.target.parentElement.querySelector(".actress__name").textContent;t.default.postRequest("http://localhost:8080/actresses/nameToId",{actressName:e},function(e){B=e,t.default.getRequest("http://localhost:8080/actresses/"+B,function(e){m().innerHTML=a.default.renderActressAndMovies(e)})})}if(event.target.classList.contains("actress__image")){var i=event.target.parentElement.querySelector(".actress__name").textContent;t.default.postRequest("http://localhost:8080/actresses/nameToId",{actressName:i},function(e){B=e,t.default.getRequest("http://localhost:8080/actresses/"+B,function(e){m().innerHTML=a.default.renderActressAndMovies(e)})})}if(event.target.classList.contains("movie__name")){var l=event.target.parentElement.querySelector(".movie__name").textContent;t.default.postRequest("http://localhost:8080/movies/nameToId",{movieName:l},function(e){D=e,t.default.getRequest("http://localhost:8080/movies/"+D,function(e){m().innerHTML=n.default.renderMovieAndClips(e)})})}if(event.target.classList.contains("movie__image")){var o=event.target.parentElement.querySelector(".movie__name").textContent;t.default.postRequest("http://localhost:8080/movies/nameToId",{movieName:o},function(e){D=e,t.default.getRequest("http://localhost:8080/movies/"+D,function(e){m().innerHTML=n.default.renderMovieAndClips(e)})})}if(event.target.classList.contains("clip__name")){var c=event.target.parentElement.querySelector(".clip__name").textContent;t.default.postRequest("http://localhost:8080/clips/nameToId",{clipName:c},function(e){F=e,t.default.getRequest("http://localhost:8080/clips/"+F,function(e){m().innerHTML=r.default.renderClip(e)})})}if(event.target.classList.contains("tag_type")){var d=event.target.parentElement.querySelector(".tag_type").textContent;t.default.postRequest("http://localhost:8080/tags/nameToId",{tagName:d},function(e){G=e,m().innerHTML=s.default.renderTag(G)})}if(event.target.classList.contains("add__actress--submit")){var u=event.target.parentElement.querySelector(".add__actress--name").value,v=event.target.parentElement.querySelector(".add__actress--image").value;t.default.postRequest("http://localhost:8080/actresses/addActress",{name:u,image:v},function(e){m().innerHTML=a.default.renderActresses(e)})}if(event.target.classList.contains("add__movie--submit")){var p=event.target.parentElement.querySelector(".add__movie--actress").value,f=event.target.parentElement.querySelector(".add__movie--name").value,g=event.target.parentElement.querySelector(".add__movie--image").value;t.default.postRequest("http://localhost:8080/movies/addMovie",{actressId:p,name:f,image:g},function(e){m().innerHTML=n.default.renderMoviesAdd(e)})}if(event.target.classList.contains("add__movieSpecific--submit")){var _=event.target.parentElement.querySelector(".add__movie--actress").value,q=event.target.parentElement.querySelector(".add__movie--name").value,h=event.target.parentElement.querySelector(".add__movie--image").value;t.default.postRequest("http://localhost:8080/movies/addMovieSpecific",{actressId:_,name:q,image:h},function(e){m().innerHTML=a.default.renderActressAndMovies(e)})}if(event.target.classList.contains("add__clip--submit")){var L=event.target.parentElement.querySelector(".add__clip--movie").value,T=event.target.parentElement.querySelector(".add__clip--name").value,M=event.target.parentElement.querySelector(".add__clip--clipLocation").value;t.default.postRequest("http://localhost:8080/clips/addClip",{movieId:L,name:T,clipLocation:M},function(e){m().innerHTML=r.default.renderClipsAdd(e)})}if(event.target.classList.contains("add__clipSpecific--submit")){var S=event.target.parentElement.querySelector(".add__clip--movie").value,y=event.target.parentElement.querySelector(".add__clip--name").value,E=event.target.parentElement.querySelector(".add__clip--clipLocation").value;t.default.postRequest("http://localhost:8080/clips/addClipSpecific",{movieId:S,name:y,clipLocation:E},function(e){m().innerHTML=n.default.renderMovieAndClips(e)})}if(event.target.classList.contains("add__tag--submit")){var R=event.target.parentElement.querySelector(".add__tag--tag").value;t.default.postRequest("http://localhost:8080/tags/addTag",{tag:R},function(e){m().innerHTML=s.default.renderTagsAdd(e)})}if(event.target.classList.contains("add__actressRating--submit")){var A=event.target.parentElement.querySelector(".add__actressId").value,H=event.target.parentElement.querySelector(".add__rating").value;t.default.postRequest("http://localhost:8080/actresses/addRating",{actressId:A,rating:H},function(e){m().innerHTML=a.default.renderActressAndMovies(e)})}if(event.target.classList.contains("add__movieRating--submit")){var I=event.target.parentElement.querySelector(".add__movieId").value,C=event.target.parentElement.querySelector(".add__rating").value;t.default.postRequest("http://localhost:8080/movies/addRating",{movieId:I,rating:C},function(e){m().innerHTML=n.default.renderMovieAndClips(e)})}if(event.target.classList.contains("add__clipRating--submit")){var b=event.target.parentElement.querySelector(".add__clipId").value,x=event.target.parentElement.querySelector(".add__rating").value;t.default.postRequest("http://localhost:8080/clips/addRating",{clipId:b,rating:x},function(e){m().innerHTML=r.default.renderClip(e)})}if(event.target.classList.contains("add__actressTag--submit")){var N=event.target.parentElement.querySelector(".add__actressId").value,k=event.target.parentElement.querySelector(".add__tag").value;t.default.postRequest("http://localhost:8080/actresses/addTag",{actressId:N,tagId:k},function(e){m().innerHTML=a.default.renderActressAndMovies(e)})}if(event.target.classList.contains("add__movieTag--submit")){var P=event.target.parentElement.querySelector(".add__movieId").value,j=event.target.parentElement.querySelector(".add__tag").value;t.default.postRequest("http://localhost:8080/movies/addTag",{movieId:P,tagId:j},function(e){m().innerHTML=n.default.renderMovieAndClips(e)})}if(event.target.classList.contains("add__clipTag--submit")){var w=event.target.parentElement.querySelector(".add__clipId").value,z=event.target.parentElement.querySelector(".add__tag").value;t.default.postRequest("http://localhost:8080/clips/addTag",{clipId:w,tagId:z},function(e){m().innerHTML=r.default.renderClip(e)})}if(event.target.classList.contains("remove__actress--submit")){var B=event.target.parentElement.querySelector(".remove__list--actress").value;t.default.postRequest("http://localhost:8080/actresses/removeActress",{actressId:B},function(e){m().innerHTML=a.default.renderActresses(e)})}if(event.target.classList.contains("remove__movie--submit")){var D=event.target.parentElement.querySelector(".remove__list--movie").value;t.default.postRequest("http://localhost:8080/movies/removeMovie",{movieId:D},function(e){m().innerHTML=n.default.renderMoviesAdd(e)})}if(event.target.classList.contains("remove__clip--submit")){var F=event.target.parentElement.querySelector(".remove__list--clip").value;t.default.postRequest("http://localhost:8080/clips/removeClip",{clipId:F},function(e){m().innerHTML=r.default.renderClipsAdd(e)})}if(event.target.classList.contains("remove__tag--submit")){var G=event.target.parentElement.querySelector(".remove__list--tag").value;t.default.postRequest("http://localhost:8080/tags/removeTag",{tagId:G},function(e){m().innerHTML=s.default.renderTagsAdd(e)})}})}function v(){f().innerHTML=(0,o.default)()}function p(){return document.querySelector("#header")}function m(){return document.querySelector("#app")}function f(){return document.querySelector("#footer")}d(),u(),v();
},{"./utils/events/event-actions":"WIWw","./utils/api/api-actions":"Yw/X","./Components/Actresses":"OlKv","./Components/Movies":"dUyw","./Components/Clips":"OiIl","./Components/Tags":"mihS","./Components/header":"2KtP","./Components/landingPage":"jtGo","./Components/footer":"9o4K"}]},{},["GFX4"], null)
//# sourceMappingURL=/app.b25d569c.js.map