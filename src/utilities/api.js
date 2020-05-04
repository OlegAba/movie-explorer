const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const baseURL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export async function getMovies(title) {
    const titleQuery = `&s=${title}`;
    const endpointUrl = baseURL + titleQuery;

    let response = await fetch(endpointUrl).catch(error => {
        throw error;
    });

    let data = await response.json();
    if (data.Response == "False") {
        throw data.Error;
    }

    return data.Search;
};

export async function getRandomMovies(amount) {
    
    for (let index = 0; index < amount; index++) {
        const randomIntInRange = getRandomInt(1000000, 3135392);
        const IdQuery = `&i=tt${randomIntInRange}`;
        const endpointUrl = baseURL + IdQuery;

        let response = await fetch(endpointUrl).catch(error => {
            throw error;
        });

        let data = await response.json();
        console.log(data);
        if (data.Response == "False") {
            throw data.Error;
        }

        return data.Search;
    }
}

function getRandomIds(amount) {
    var ids = [];

    for (let index = 0; index < amount; index++) {
        const randomIntInRange = getRandomInt(100000, 999999);
        const randomId = `&i=${randomIntInRange}`;
        ids.push(randomId);
    }

    return ids;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
