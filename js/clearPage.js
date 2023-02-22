const moviesList = document.getElementsByClassName('filmes__lista');
export function clearPage() {
    moviesList.removeChild(moviesList.firstChild);
    while (moviesList.firstChild) {
        moviesList.removeChild(moviesList.lastChild);
    }
    console.log(moviesList)
}