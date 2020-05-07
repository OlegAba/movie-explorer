import { 
  USER_SEARCHED, MOVIE_REQUESTED, MOVIE_RECEIVED, 
  RANDOM_MOVIE_RECEIVED, MOVIE_FAILED, DELETE_MOVIE 
} from '../actions/types';

const initialState = {
  isLoading: false,
  userSearched: false,
  movies: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case USER_SEARCHED:
      return {
        ...state,
        userSearched: true,
      }
    case MOVIE_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case RANDOM_MOVIE_RECEIVED:
      if (!state.userSearched) {
        return {
          ...state,
          isLoading: false,
          movies: action.payload
        }
      } else {
        return {
          ...state,
          isLoading: false
        }
      }
    case MOVIE_RECEIVED:
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      }
    case MOVIE_FAILED:
      return {
        ...state,
        isLoading: false,
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