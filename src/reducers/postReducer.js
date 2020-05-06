import { MOVIE_REQUESTED, MOVIE_RECEIVED, MOVIE_FAILED, DELETE_MOVIE } from '../actions/types';

const initialState = {
    status: "",
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
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((_, index) => action.payload !== index)
            }
        default:
            return state
    }
}