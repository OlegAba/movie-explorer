import { FETCH_POSTS, NEW_POST, FETCH_MOVIES } from './types';
import { getMovies, getRandomMovies } from '../utilities/api'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
};

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post 
        }));
};

export const fetchMovies = (title) => dispatch => {
    getMovies(title).then(data => dispatch({
        type: FETCH_MOVIES,
        payload: data,
    })).catch(error => {
        console.log(error);
    });
}

export const fetchRandomMovies = (amount) => dispatch => {
    getRandomMovies(amount).then(data => dispatch({
        type: FETCH_MOVIES,
        payload: data,
    })).catch(error => {
        console.log(error);
    })
}