import { renderMovie } from "./renderMovie.js";
import { apiKey } from "./apiKey.js";

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
    const fetchResponse = await fetch(url);
    const responseConvertida = await fetchResponse.json();
    return responseConvertida.results.forEach(movie => renderMovie(movie));
}

getPopularMovies();