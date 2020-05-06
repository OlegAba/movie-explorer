const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const baseURL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export async function getMovies(title) {
    const titleQuery = `&s=${title}`;
    const endpointUrl = baseURL + titleQuery;

    console.log(endpointUrl);

    let response = await fetch(endpointUrl).catch(error => {
        throw error;
    });

    let data = await response.json();
    if (data.Response === "False") {
        throw data.Error;
    }

    return data.Search;
};

export async function getRandomMovies(amount) {

    const movies = [];

    while (movies.length < amount) {
        const randomIntInRange = getRandomInt(1000000, 3135392);
        const IdQuery = `&i=tt${randomIntInRange}`;
        const endpointUrl = baseURL + IdQuery;

        let response = await fetch(endpointUrl).catch(error => {
            throw error;
        });

        let data = await response.json();
        if (data.Response === "False") {
            continue;
        }

        movies.push(data);
    }

    return movies;
}

// TODO: Move to a utilites file
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
