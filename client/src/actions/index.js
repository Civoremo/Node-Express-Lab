import axios from 'axios';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const baseUrl = 'http://localhost:5000/';

export const fetchPosts = () => dispatch => {
    dispatch({ type: FETCH_POSTS_START });
    axios({
            method: 'get',
            url: `${baseUrl}`,
        })
        .then(res => {
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data.posts})
        })
        .catch(err => {
            dispatch({ type: FETCH_POSTS_FAILURE, payload: err})
        });
};