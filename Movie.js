const movieContainer = document.getElementById('movie-container');

async function fetchMovies() {
    const response = await fetch('https://api-testingg.onrender.com/api/movies');
    const movies = await response.json();
    displayMovies(movies);
}

function displayMovies(movies) {
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
        `;
        card.addEventListener('click', () => {
            localStorage.setItem('selectedMovie', JSON.stringify(movie));
            console.log('Selected Movie:', movie); // Add this line
            window.location.href = 'movie-detail.html';
        });
        movieContainer.appendChild(card);
    });
}

fetchMovies();
