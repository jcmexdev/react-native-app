const BASE_API = 'https://yts.mx/api/v2/';
const OFFLINE_MODE = true;

class Api {
  async getSuggestions(id) {
    const MOVIE_SUGGESTIONS_URL = `${BASE_API}/movie_suggestions.json?movie_id=${id}`;
    const LOCAL_DATA = [
      {
        id: 1,
        medium_cover_image: 'http://dummyimage.com/100x150.bmp/cc0000/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'other title',
        year: 2007,
        rating: 2,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 2,
        medium_cover_image: 'http://dummyimage.com/100x150.bmp/5fa2dd/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'elementum',
        year: 1994,
        rating: 4,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 3,
        medium_cover_image: 'http://dummyimage.com/100x150.png/cc0000/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'nullam',
        year: 1993,
        rating: 2,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 4,
        medium_cover_image: 'http://dummyimage.com/100x150.png/dddddd/000000',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'luctus et',
        year: 2010,
        rating: 3,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 5,
        medium_cover_image: 'http://dummyimage.com/100x150.jpg/cc0000/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'montes nascetur',
        year: 2009,
        rating: 4,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
    ];
    if (OFFLINE_MODE) {
      return LOCAL_DATA;
    }
    return await fetch(MOVIE_SUGGESTIONS_URL)
      .then(response => response.json())
      .then(response => response.data.movies)
      .catch(error => {
        console.log(`Ocurrio un error al cargar las sugerencias: ${error}`);
      });
  }

  async getMovies() {
    const LOCAL_DATA = [
      {
        id: 1,
        background_image: 'http://dummyimage.com/100x150.png/5fa2dd/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'lectus suspendisse',
        year: 1990,
        rating: 4,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 2,
        background_image: 'http://dummyimage.com/100x150.png/ff4444/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'erat eros',
        year: 1996,
        rating: 4,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 3,
        background_image: 'http://dummyimage.com/100x150.jpg/ff4444/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'vivamus',
        year: 2009,
        rating: 4,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 4,
        background_image: 'http://dummyimage.com/100x150.bmp/ff4444/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'eget',
        year: 1995,
        rating: 3,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 5,
        background_image: 'http://dummyimage.com/100x150.jpg/dddddd/000000',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'dictumst morbi',
        year: 1994,
        rating: 3,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
      {
        id: 6,
        background_image: 'http://dummyimage.com/100x150.jpg/cc0000/ffffff',
        genres: ['terro', 'suspenso', 'triller', 'romanticas'],
        title: 'faucibus orci',
        year: 2003,
        rating: 5,
        description_full:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime expedita alias est nostrum quis omnis quidem placeat solut',
      },
    ];
    if (OFFLINE_MODE) {
      return LOCAL_DATA;
    }
    return await fetch(`${BASE_API}/list_movies.json`)
      .then(response => response.json())
      .then(response => response.data.movies)
      .catch(error => {
        console.log(`Ocurrio un error al cargar las peliculas: ${error}`);
      });
  }
}

export default new Api();
