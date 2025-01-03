import { renderMovie } from "./renderMovie.js";

async function getPopularMovies() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjdhNWI5MmZmMTFmOTAwZTVkM2ZmZjBjZDM1YTE2MCIsIm5iZiI6MTY3NjQxMTAwNC4zMzQsInN1YiI6IjYzZWMwMDdjNjk5ZmI3MDA5NmFkNTQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A1jA04-hYun37uPOWf1rM2LcMhnKbLoO4jXG21zgfUs",
        },
    };

    fetch(
        "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
        options
    )
        .then((res) => res.json())
        .then((res) => res.results.forEach((movie) => renderMovie(movie)))
        .catch((err) => console.error(err));
}

getPopularMovies();

async function searchMovie(search_title) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjdhNWI5MmZmMTFmOTAwZTVkM2ZmZjBjZDM1YTE2MCIsIm5iZiI6MTY3NjQxMTAwNC4zMzQsInN1YiI6IjYzZWMwMDdjNjk5ZmI3MDA5NmFkNTQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A1jA04-hYun37uPOWf1rM2LcMhnKbLoO4jXG21zgfUs",
        },
    };

    if (search_title === "") {
        location.reload();
    }

    fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search_title}&include_adult=false&language=pt-BR&page=1`,
        options
    )
        .then((res) => res.json())
        .then((res) => res.results.forEach((movie) => renderMovie(movie)))
        .catch((err) => console.error(err));
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
    JSON.parse(localStorage.getItem("movies")).forEach((movie) =>
        renderMovie(movie)
    );
}

var filterFavoriteMovies = document.querySelector("#filtro");
filterFavoriteMovies.addEventListener("change", function () {
    if (this.checked) {
        clearPage();
        showFavoritedMovies();
    } else {
        location.reload();
    }
});
