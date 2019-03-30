// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/events/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"js/utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location) // fetch('http://localhost:8080' + location) // Original  on line 3 
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    // fetch('http://localhost:8080' + location, { // Original on line 11 
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest
};
exports.default = _default;
},{}],"js/Components/Actresses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function renderActresses(actresses) {
  return " \n    <div>\n        <ul class=\"actresses\">\n        ".concat(actresses.map(function (actress) {
    return " \n                    <li class=\"actress\">\n                        <h5 class=\"actress__name clickable\">".concat(actress.name, "</h5>\n                        <h3 class=\"actress__img><img src=\">").concat(actress.image, "</h3>\n                    </li>\n                    ");
  }).join(""), "\n        </ul>\n    </div>\n        ");
}

function listActresses(actresses) {
  return actresses.map(function (actress) {
    return "   \n            <option value=\"".concat(actress.id, "\">").concat(actress.name, "</option>    \n            ");
  }).join("");
}

var _default = {
  renderActresses: renderActresses,
  listActresses: listActresses
};
exports.default = _default;
},{}],"js/Components/add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Actresses = _interopRequireDefault(require("./Actresses"));

var _Movies = _interopRequireDefault(require("./Movies"));

var _Clips = _interopRequireDefault(require("./Clips"));

var _apiActions = _interopRequireDefault(require("../utils/api/api-actions"));

var _addActress$addMovie$;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addMovie() {
  _apiActions.default.getRequest('/actresses', function (actresses) {
    document.querySelector('.add__movie-actress').innerHTML = (0, _Actresses.default)(actresses);
  });

  return "\n    <section class=\"add__album\">\n        <h3>Add Album</h3>\n        \n            <select type=\"select\" class=\"add__movie--actress\" placeholder=\"Pick Actress\">\n            \n            </select>                 \n            <input type=\"text\" class=\"add__actress--name\" placeholder=\"title\">\n            <input type=\"text\" class=\"add__actress--image\" placeholder=\"image\">\n            <button class=\"add__movie--submit clickable\">Add Movie</button>\n        </section>\n        ";
}

function addActress() {
  return "\n    <section class=\"add__actress\">\n        <h3>Add Actress</h3>\n        \n            <input type=\"select\" class=\"add__actress-name\" placeholder=\"Actress Name\">\n            <input type=\"text\" class=\"add__actress--image\" placeholder=\"image\">\n            <button class=\"add__actress--submit clickable\">Add Actress</button>\n        </section> \n        ";
}

function addMovieSpecific(actress) {
  return "\n    <section class=\"add__movie\">\n        <h3>Add Movie</h3>\n        \n        <input type=\"hidden\" class=\"add__movie--actress\" value=\"".concat(actress.id, "\">\n                            \n            <input type=\"text\" class=\"add__movie--name\" placeholder=\"title\">\n            <input type=\"text\" class=\"add__movie--image\" placeholder=\"image\">\n            <button class=\"add__movieSpecific--submit clickable\">Add Movie</button>\n        </section>\n        ");
}

function addClipSpecific(movie) {
  return "\n    <section class=\"add__clip\">\n            <h3>Add Clip</h3>\n            <input type=\"hidden\" class=\"add__clip--album\" value=\"".concat(movie.id, "\">\n            <input type=\"text\" class=\"add__clip--title\" placeholder=\"Clip title\">\n            <button class=\"add__clipSpecific--submit clickable\">Add Clip</button>\n        </section>\n        ");
}

function addClip() {
  _apiActions.default.getRequest('/movies', function (movies) {
    document.querySelector('.add__clip--movie').innerHTML = (0, _Movies.default)(movies);
  });

  return "\n    <section class=\"add__clip\">\n        <h3>Add Clip</h3>\n        \n            <select type=\"select\" class=\"add__clip--movie\" placeholder=\"Pick Movie\">\n            </select>\n            <input type=\"text\" class=\"add__clip--clipLocation\" placeholder=\"URL\">\n            <button class=\"add__clip--submit clickable\">Add Clip</button>\n        </section>\n        ";
}

function addRatingClip(clip) {
  return "\n    <section class=\"add__rating__clip\">\n        <h3>Add Rating to Clip</h3>\n        <input type=\"hidden\" class=\"add__clipId\" value=\"".concat(clip.id, "\">\n        <select type=\"select\" class=\"add__rating\" placeholder=\"Choose Rating\">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class=\"add__clipRating--submit clickable\">Add Rating</button>\n    </section> \n        ");
}

function addRatingMovie(movie) {
  return "\n    <section class=\"add__rating__movie>\n        <h3>Add Rating to Movie</h3>\n        <input type=\"hidden\" class=\"add__movieId\" value=\"".concat(movie.id, "\">\n        <select type=\"select\" class=\"add__rating\" placeholder=\"Choose Rating\">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class=\"add__movieRating--submit clickable\">Add Rating</button>\n    </section> \n        ");
}

function addRatingActress(actress) {
  return "\n    <section class=\"add__rating__actress\">\n        <h3>Add Rating to Actress</h3>\n        <input type=\"hidden\" class=\"add__actressId\" value=\"".concat(actress.id, "\">\n        <select type=\"select\" class=\"add__rating\" placeholder=\"Choose Rating\">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class=\"add__actressRating--submit clickable\">Add Comment</button>\n    </section> \n        ");
}

var _default = (_addActress$addMovie$ = {
  addActress: addActress,
  addMovie: addMovie,
  addClip: addClip,
  addRatingActress: addRatingActress,
  addRatingMovie: addRatingMovie
}, _defineProperty(_addActress$addMovie$, "addRatingActress", addRatingActress), _defineProperty(_addActress$addMovie$, "addClipSpecific", addClipSpecific), _defineProperty(_addActress$addMovie$, "addMovieSpecific", addMovieSpecific), _addActress$addMovie$);

exports.default = _default;
},{"./Actresses":"js/Components/Actresses.js","./Movies":"js/Components/Movies.js","./Clips":"js/Components/Clips.js","../utils/api/api-actions":"js/utils/api/api-actions.js"}],"js/Components/Clips.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _add = _interopRequireDefault(require("./add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// List the Clips // 
function renderClips(clips) {
  return " \n    <div>\n        <ul class=\"clips\">\n        ".concat(clips.map(function (clip) {
    return " \n                    <li class=\"clip\">\n                        <h5 class=\"clip__title clickable\">".concat(clip.clipLocation, "</h5>\n                    </li>\n                    ");
  }).join(""), "\n        </ul>\n    </div>\n        ");
} // Adding Clips //


function renderClipsAdd(clips) {
  return "\n    ".concat(renderClips(clips), "\n    <div class=\"user-input\">\n        ").concat(_add.default.addClip(), "\n    </div>\n        ");
} // Looking at one single clip //


function renderClip(clip) {
  return " \n        <iframe class=\"landingClip\" width=\"560\" height=\"315\" src=\"".concat(clip.clipLocation, "?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        <h4 class=\"clip__rating\">Average Rating: ").concat(clip.avgRating, "</h4>\n        <h4 class=\"clip__comments\">Comments</h4>\n            ").concat(Comments.renderClipComments(clip), "\n        <div class=\"user-input\">\n            ").concat(_add.default.addRatingAndCommentClip(clip), "\n        </div>\n        "); // Adding the Ability // 
}

var _default = {
  renderClipsAdd: renderClipsAdd,
  renderClip: renderClip,
  renderClips: renderClips
};
exports.default = _default;
},{"./add":"js/Components/add.js"}],"js/Components/Add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Actresses = _interopRequireDefault(require("./Actresses"));

var _Movies = _interopRequireDefault(require("./Movies"));

var _Clips = _interopRequireDefault(require("./Clips"));

var _apiActions = _interopRequireDefault(require("../utils/api/api-actions"));

var _addActress$addMovie$;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addMovie() {
  _apiActions.default.getRequest('/actresses', function (actresses) {
    document.querySelector('.add__movie-actress').innerHTML = (0, _Actresses.default)(actresses);
  });

  return "\n    <section class=\"add__album\">\n        <h3>Add Album</h3>\n        \n            <select type=\"select\" class=\"add__movie--actress\" placeholder=\"Pick Actress\">\n            \n            </select>                 \n            <input type=\"text\" class=\"add__actress--name\" placeholder=\"title\">\n            <input type=\"text\" class=\"add__actress--image\" placeholder=\"image\">\n            <button class=\"add__movie--submit clickable\">Add Movie</button>\n        </section>\n        ";
}

function addActress() {
  return "\n    <section class=\"add__actress\">\n        <h3>Add Actress</h3>\n        \n            <input type=\"select\" class=\"add__actress-name\" placeholder=\"Actress Name\">\n            <input type=\"text\" class=\"add__actress--image\" placeholder=\"image\">\n            <button class=\"add__actress--submit clickable\">Add Actress</button>\n        </section> \n        ";
}

function addMovieSpecific(actress) {
  return "\n    <section class=\"add__movie\">\n        <h3>Add Movie</h3>\n        \n        <input type=\"hidden\" class=\"add__movie--actress\" value=\"".concat(actress.id, "\">\n                            \n            <input type=\"text\" class=\"add__movie--name\" placeholder=\"title\">\n            <input type=\"text\" class=\"add__movie--image\" placeholder=\"image\">\n            <button class=\"add__movieSpecific--submit clickable\">Add Movie</button>\n        </section>\n        ");
}

function addClipSpecific(movie) {
  return "\n    <section class=\"add__clip\">\n            <h3>Add Clip</h3>\n            <input type=\"hidden\" class=\"add__clip--album\" value=\"".concat(movie.id, "\">\n            <input type=\"text\" class=\"add__clip--title\" placeholder=\"Clip title\">\n            <button class=\"add__clipSpecific--submit clickable\">Add Clip</button>\n        </section>\n        ");
}

function addClip() {
  _apiActions.default.getRequest('/movies', function (movies) {
    document.querySelector('.add__clip--movie').innerHTML = (0, _Movies.default)(movies);
  });

  return "\n    <section class=\"add__clip\">\n        <h3>Add Clip</h3>\n        \n            <select type=\"select\" class=\"add__clip--movie\" placeholder=\"Pick Movie\">\n            </select>\n            <input type=\"text\" class=\"add__clip--clipLocation\" placeholder=\"URL\">\n            <button class=\"add__clip--submit clickable\">Add Clip</button>\n        </section>\n        ";
}

function addRatingClip(clip) {
  return "\n    <section class=\"add__rating__clip\">\n        <h3>Add Rating to Clip</h3>\n        <input type=\"hidden\" class=\"add__clipId\" value=\"".concat(clip.id, "\">\n        <select type=\"select\" class=\"add__rating\" placeholder=\"Choose Rating\">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class=\"add__clipRating--submit clickable\">Add Rating</button>\n    </section> \n        ");
}

function addRatingMovie(movie) {
  return "\n    <section class=\"add__rating__movie>\n        <h3>Add Rating to Movie</h3>\n        <input type=\"hidden\" class=\"add__movieId\" value=\"".concat(movie.id, "\">\n        <select type=\"select\" class=\"add__rating\" placeholder=\"Choose Rating\">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class=\"add__movieRating--submit clickable\">Add Rating</button>\n    </section> \n        ");
}

function addRatingActress(actress) {
  return "\n    <section class=\"add__rating__actress\">\n        <h3>Add Rating to Actress</h3>\n        <input type=\"hidden\" class=\"add__actressId\" value=\"".concat(actress.id, "\">\n        <select type=\"select\" class=\"add__rating\" placeholder=\"Choose Rating\">\n            <option value=1>1</option> \n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option> \n        </select>\n        <button class=\"add__actressRating--submit clickable\">Add Comment</button>\n    </section> \n        ");
}

var _default = (_addActress$addMovie$ = {
  addActress: addActress,
  addMovie: addMovie,
  addClip: addClip,
  addRatingActress: addRatingActress,
  addRatingMovie: addRatingMovie
}, _defineProperty(_addActress$addMovie$, "addRatingActress", addRatingActress), _defineProperty(_addActress$addMovie$, "addClipSpecific", addClipSpecific), _defineProperty(_addActress$addMovie$, "addMovieSpecific", addMovieSpecific), _addActress$addMovie$);

exports.default = _default;
},{"./Actresses":"js/Components/Actresses.js","./Movies":"js/Components/Movies.js","./Clips":"js/Components/Clips.js","../utils/api/api-actions":"js/utils/api/api-actions.js"}],"js/Components/Movies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Clips = _interopRequireDefault(require("./Clips"));

var _Add = _interopRequireDefault(require("./Add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderMovies(movies) {
  return "\n    <div>\n    <ul class=\"albums\">\n    ".concat(movies.map(function (movie) {
    return "\n\n                        <li class=\"movie\">\n                            <h5 class=\"movie__name clickable\">".concat(movie.name, "</h5> \n                            <img class=\"movie__image clickable\"src=\"").concat(movie.image, "\" />                       \n                        </li>\n                        \n                    ");
  }).join(""), "\n        </ul>\n        </div>\n        ");
}

function renderMoviesAdd(movies) {
  return "\n        ".concat(renderMovies(movies), "\n        <div class=\"user-input\">\n        ").concat(_Add.default.addMovie(), "\n    </div>\n        ");
}

function renderMoviesAndClips(movies) {
  return "\n    <div>\n    <ul class=\"movies\">\n    ".concat(movies.map(function (movie) {
    return "\n        <div>\n        <h5 class=\"movie__name clickable\" value=".concat(movie.id, ">").concat(movie.title, "</h5>  \n        <img class= \"movie__image clickable\" src=\"").concat(movie.image, "\" /> \n                <li class=\"movie\">\n                    \n                        ").concat(_Clips.default.renderClips(movie.Clips), "             \n                </li>\n        </div>\n            ");
  }).join(""), "\n    </ul>\n    </div>\n    ");
}

function renderMoviesHeaderAndClips(movies) {
  return "\n        <h4 class=\"Movie__header\">Movies</h4>\n        ".concat(this.renderMoviesAndClips(movies), "\n    ");
}

function renderMovieAndClips(movie) {
  return "\n        <h2 class=\"movie__name\">".concat(movie.name, "</h2> \n        <img class= \"movie__image\" src=\"").concat(movie.image, "\" />  \n            ").concat(_Clips.default.renderClipsHeader(movie.clips), "  \n        <br>\n        <h4 class=\"movie__rating\">Average Rating: ").concat(movie.avgRating, "</h4>\n        <h4 class=\"movie__comments\">Comments</h4>\n            ").concat(Comments.renderMovieComments(movie), " \n        <div class=\"user-input\">\n            ").concat(_Add.default.addClipSpecific(movie), "\n            ").concat(_Add.default.addRatingAndCommentMovie(movie), "\n        </div>           \n    ");
}

var _default = {
  renderMovies: renderMovies,
  renderMoviesAdd: renderMoviesAdd,
  renderMoviesAndClips: renderMoviesAndClips,
  renderMoviesHeaderAndClips: renderMoviesHeaderAndClips,
  renderMovieAndClips: renderMovieAndClips
};
exports.default = _default;
},{"./Clips":"js/Components/Clips.js","./Add":"js/Components/Add.js"}],"js/Components/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderHeader;

function renderHeader() {
  return "\n        <h1 class=\"header-title\">Femme Fatale</h1>\n        <nav class=\"header-nav\">\n            <ul class=\"nav-list\">\n                <li class=\"nav-actress clickable\">Actresses</li>\n                <li class=\"nav-movie clickable\">Movies</li>\n                <li class=\"nav-clip clickable\">Clips</li>\n            </ul>\n        <nav>\n        ";
}
},{}],"js/Components/landingPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderLandingPage;

function renderLandingPage() {
  return "\n    <div class=\"landingVideo-container\">\n    <iframe class=\"landingVideo\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/BWuafJtMrBE?start=201?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    ";
}
},{}],"js/Components/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderFooter;

function renderFooter() {
  return "\n    <p>Anthony and Alicia &copy2019</p>\n        ";
}
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _Actresses = _interopRequireDefault(require("./Components/Actresses"));

var _Movies = _interopRequireDefault(require("./Components/Movies"));

var _Clips = _interopRequireDefault(require("./Components/Clips"));

var _header = _interopRequireDefault(require("./Components/header"));

var _landingPage = _interopRequireDefault(require("./Components/landingPage"));

var _footer = _interopRequireDefault(require("./Components/footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

header();
main();
footer();

function header() {
  getHeaderContext().innerHTML = (0, _header.default)(); // Main Page // 

  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('header-title')) {
      getAppContext().innerHTML = (0, _landingPage.default)();
    }

    if (event.target.classList.contains('nav-actress')) {
      _apiActions.default.getRequest('http://localhost:8080/actresses', function (actresses) {
        // api.getRequest('/actresses', (actresses) => { // Original on line 26, change to specific LOCALHOST:8080
        getAppContext().innerHTML = _Actresses.default.renderActresses(actresses);
      });
    }

    if (event.target.classList.contains('nav-movie')) {
      _apiActions.default.getRequest('http://localhost:8080/movies', function (movies) {
        // api.getRequest('/movies', (movies) => { // Original on line 32, change to specific LOCALHOST:8080
        getAppContext().innerHTML = _Movies.default.renderMoviesAdd(movies);
      });
    }

    if (event.target.classList.contains('nav-clip')) {
      _apiActions.default.getRequest('/clips', function (clips) {
        getAppContext().innerHTML = _Clips.default.renderClipsAdd(clips);
      });
    }
  });
}

function main() {
  getAppContext().innerHTML = (0, _landingPage.default)(); // events.on(getAppContext(), 'click', () => {
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
  getAppContext().innerHTML = (0, _footer.default)();
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
},{"./utils/events/event-actions":"js/utils/events/event-actions.js","./utils/api/api-actions":"js/utils/api/api-actions.js","./Components/Actresses":"js/Components/Actresses.js","./Components/Movies":"js/Components/Movies.js","./Components/Clips":"js/Components/Clips.js","./Components/header":"js/Components/header.js","./Components/landingPage":"js/Components/landingPage.js","./Components/footer":"js/Components/footer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56897" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map