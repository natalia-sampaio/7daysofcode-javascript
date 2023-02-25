const moviesList = document.getElementById('filmes__lista');
const favoriteMovies = JSON.parse(localStorage.getItem('movies') )|| [];

export function renderMovie(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('card');
    moviesList.appendChild(movieElement);

    const movieImageContainer = document.createElement('div');
    movieImageContainer.classList.add('card__imagem');
    movieElement.appendChild(movieImageContainer);

    const movieImage = document.createElement('img');
    movieImage.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    movieImageContainer.appendChild(movieImage);

    const movieTitleContainer = document.createElement('div');
    movieTitleContainer.classList.add('card__titulo');
    movieElement.appendChild(movieTitleContainer);

    const movieTitle = document.createElement('span');
    movieTitle.classList.add('card__titulo-filme');
    movieTitle.textContent = movie.title.concat(" ", "(", movie.release_date, ")");
    movieTitleContainer.appendChild(movieTitle);

    const movieRating = document.createElement('div');
    movieRating.classList.add('card__nota');
    const starImage = document.createElement('img');
    starImage.src = 'img/Star.svg';
    movieRating.appendChild(starImage);
    const ratingValue = document.createElement('span');
    ratingValue.textContent = movie.vote_average;
    movieRating.appendChild(ratingValue);
    movieTitleContainer.appendChild(movieRating);

    const favoriteButton = document.createElement('div');
    favoriteButton.classList.add('card__favorito');
    const favoriteButtonCheckbox = document.createElement('input');
    favoriteButtonCheckbox.setAttribute('type', 'checkbox');
    favoriteButtonCheckbox.setAttribute('id', `${movie.id}`);
    favoriteButtonCheckbox.setAttribute('class','card__favorito-botao');
    const favoriteButtonLabel = document.createElement('label');
    favoriteButtonLabel.setAttribute('for', `${movie.id}`);
    favoriteButtonLabel.setAttribute('class', 'favorito-botao__label');
    const favoriteButtonLabelImage = document.createElement('span');
    favoriteButtonLabelImage.setAttribute('class', 'favorito-botao__imagem');
    const favoriteButtonText = document.createElement('span');
    favoriteButtonText.textContent = 'Favoritar';
    favoriteButtonLabel.appendChild(favoriteButtonLabelImage);
    favoriteButton.appendChild(favoriteButtonCheckbox);
    favoriteButton.appendChild(favoriteButtonLabel);
    favoriteButton.appendChild(favoriteButtonText);
    movieTitleContainer.appendChild(favoriteButton);

    const movieDescription = document.createElement('span');
    movieDescription.textContent = movie.overview;
    movieElement.appendChild(movieDescription);

    const isFavorited = favoriteMovies.find(element => element.id === movie.id);
    if(isFavorited) {
        favoriteButtonCheckbox.checked = true;
        favoriteButtonText.textContent = 'Favorito';
    }

    favoriteButtonCheckbox.addEventListener("click", () => {
        if(!isFavorited) {
            favoriteButtonText.textContent = 'Favorito';
            addMovieToFavorites(movie);
        } else {
            favoriteButtonText.textContent = 'Favoritar';
            removeMovieFromFavorites(isFavorited.id); 
        }
    });
}

function addMovieToFavorites(movie) {
    favoriteMovies.push(movie);
    localStorage.setItem('movies', JSON.stringify(favoriteMovies));
}

function removeMovieFromFavorites(id) {
    favoriteMovies.splice(favoriteMovies.findIndex(elemento => elemento.id === id), 1);
    localStorage.setItem('movies', JSON.stringify(favoriteMovies));
}