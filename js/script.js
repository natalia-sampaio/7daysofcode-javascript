import { renderMovie } from "./renderMovie.js";
import { apiKey } from "./apiKey.js";

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    return response.results.forEach(movie => renderMovie(movie));
}

getPopularMovies();

async function searchMovie(search_title) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=06a89df5363d1e40a48fe8fe3503438b&language=en-US&query=${search_title}&page=1&include_adult=false`
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    if (search_title === "") {
        location.reload();
    }
    return response.results.forEach(movie => renderMovie(movie));
}

function clearPage() {
    const moviesList = document.getElementById("filmes__lista");
    while (moviesList.firstChild) {
        moviesList.removeChild(moviesList.lastChild);
    }
}

var search_title = document.getElementById("search__bar");
search_title.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        clearPage();
        searchMovie(search_title.value);
        search_title.value = "";
    }
});

function showFavoritedMovies() {
    JSON.parse(localStorage.getItem('movies')).forEach(movie => renderMovie(movie));
}

var filterFavoriteMovies = document.querySelector('#filtro');
filterFavoriteMovies.addEventListener("change", function () {
    if (this.checked) {
        clearPage();
        showFavoritedMovies();
    } else {
        location.reload();
    }
});