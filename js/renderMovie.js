const moviesList = document.createElement('section');
moviesList.classList.add('filmes__lista');
document.body.appendChild(moviesList);

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

    const favoriteButtonContainer = document.createElement('div');
    favoriteButtonContainer.classList.add('card__favorito');
    const favoriteButton = document.createElement('img');
    const favoriteButtonText = document.createElement('span');
    if (movie.isFavorited) {
        favoriteButton.src = 'img/Heart-filled.svg';
        favoriteButtonText.textContent = 'Favorito';
    } else {
        favoriteButton.src = 'img/Heart.svg';
        favoriteButtonText.textContent = 'Favoritar';
    }
    favoriteButtonContainer.appendChild(favoriteButton);
    favoriteButtonContainer.appendChild(favoriteButtonText);
    movieTitleContainer.appendChild(favoriteButtonContainer);

    const movieDescription = document.createElement('span');
    movieDescription.textContent = movie.overview;
    movieElement.appendChild(movieDescription);
}