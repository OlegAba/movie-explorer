import { MOVIE_REQUESTED, MOVIE_RECEIVED, MOVIE_FAILED } from './types';
import { getMovies, getRandomMovies } from '../utilities/api'

export const fetchMovies = (title) => dispatch => {
    dispatch({
        type: MOVIE_REQUESTED,
    });

    getMovies(title).then(data => dispatch({
        type: MOVIE_RECEIVED,
        payload: data,
    })).catch(error => dispatch({
        type: MOVIE_FAILED,
        payload: error
    }));
}

export const fetchRandomMovies = (amount) => dispatch => {
    dispatch({
        type: MOVIE_REQUESTED,
    });
    
    getRandomMovies(amount).then(data => dispatch({
        type: MOVIE_RECEIVED,
        payload: data,
    })).catch(error => dispatch({
        type: MOVIE_FAILED,
        payload: error
    }));
}