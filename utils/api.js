const BASE_API = 'https://yts.mx/api/v2/';


class Api {

    async getSuggestions(id) {
        const MOVIE_SUGGESTIONS_URL = `${BASE_API}/movie_suggestions.json?movie_id=${id}`;
        return await fetch(MOVIE_SUGGESTIONS_URL)
            .then(response => response.json())
            .then((response) => response.data.movies)
            .catch(error => {
                console.log(`Ocurrio un erro al cargar las sugerencias: ${error}`);
            });

    }

    async getMovies() {
        return await fetch(`${BASE_API}/list_movies.json`)
            .then(response => response.json())
            .then(response => response.data.movies)
            .catch(error => {
                console.log(`Ocurrio un erro al cargar las peliculas: ${error}`);
            });
    }
}

export default new Api();