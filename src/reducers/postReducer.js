import { FETCH_POSTS, NEW_POST, FETCH_MOVIES } from '../actions/types';

const initialState = {
    movies: [],
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}