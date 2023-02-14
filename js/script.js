const moviesList = document.createElement('section');
moviesList.classList.add('filmes__lista');
document.body.appendChild(moviesList);

function renderMovie(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('card');
    moviesList.appendChild(movieElement);

    const movieImageContainer = document.createElement('div');
    movieImageContainer.classList.add('card__imagem');
    movieElement.appendChild(movieImageContainer);

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImageContainer.appendChild(movieImage);

    const movieTitleContainer = document.createElement('div');
    movieTitleContainer.classList.add('card__titulo');
    movieElement.appendChild(movieTitleContainer);

    const movieTitle = document.createElement('span');
    movieTitle.classList.add('card__titulo-filme');
    movieTitle.textContent = movie.title.concat(" ","(",movie.year,")");
    movieTitleContainer.appendChild(movieTitle);

    const movieRating = document.createElement('div');
    movieRating.classList.add('card__nota');
    const starImage = document.createElement('img');
    starImage.src = 'img/Star.svg';
    movieRating.appendChild(starImage);
    const ratingValue = document.createElement('span');
    ratingValue.textContent = movie.rating;
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
    movieDescription.textContent = movie.description;
    movieElement.appendChild(movieDescription);
}

const movies = [
    {
        image: 'https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        title: 'Metrópolis',
        rating: 8.3,
        year: 1927,
        description: 'Numa cidade futurística dividida entre os trabalhadores e os planejadores, o filho do maior planejador se apaixona por uma trabalhadora.',
        isFavorited: false,
    },
    {
        image: 'https://m.media-amazon.com/images/M/MV5BYjM5ZjYxNjQtZjdhYi00NzBiLTgyNGItOGU3YTYwYWE0NmEzXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg',
        title: 'A Lista de Schindler',
        rating: 9.1,
        year: 1993,
        description: 'Depois de testemunhar a perseguição dos judaicos na Polônia ocupada pelos alemães durante a Segunda Guerra Mundial, o industrial Oskar Schindler se começa a preocupar com sua força de trabalho judaica.',
        isFavorited: true
    },
    {
        image: 'https://m.media-amazon.com/images/M/MV5BMTYyMDRiNTQtNjY4NC00MWI1LWIyZTAtYjQ1ZDJjMjdkYzM0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        title: 'O Resgate do Soldado Ryan',
        rating: 8.6,
        year: 1998,
        description: 'Depois de chegar a Normandía, um grupo de soldados precisam encontrar ao unico irmão vivo de tres que morreram na guerra.',
        isFavorited: true
    },
    {
        image: 'https://m.media-amazon.com/images/M/MV5BYTY3M2NhODAtMTRiNC00OThlLTg3YTAtNjIwNjU2Zjg1MDFhXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
        title: 'A Vida é Bela',
        rating: 8.6,
        year: 1998,
        description: 'Quando um bibliotecário judeu e seu filho se tornarem vítimas do Holocausto, ele usará uma mistura perfeita de vontade, humor e imaginação para proteger seu filho dos perigos do campo de concentração.',
        isFavorited: false
    },
]

movies.forEach(movie => renderMovie(movie))