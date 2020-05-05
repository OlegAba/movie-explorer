import { MOVIE_REQUESTED, MOVIE_RECEIVED, MOVIE_FAILED } from '../actions/types';

const initialState = {
    status: "",
    //TODO: Change movies to data globally
    movies: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case MOVIE_REQUESTED:
            return {
                ...state,
                status: "Waiting for data..."
            }
        case MOVIE_RECEIVED:
            return {
                ...state,
                status: "Received data",
                movies: action.payload
            }
        case MOVIE_FAILED:
            return {
                ...state,
                status: "Failed",
                error: action.payload
            }
        default:
            return state
    }
}