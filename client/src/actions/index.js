import axios from 'axios';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_SINGLE_POST_START = 'FETCH_SINGLE_POST_START';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';
export const FETCH_SINGLE_POST_FAILURE = 'FETCH_SINGLE_POST_FAILURE';

const baseUrl = 'http://localhost:5000/api/posts';

export const fetchSinglePost = (id) => dispatch => {
    dispatch({ type: FETCH_SINGLE_POST_START });
    axios({
        method: 'get',
        url: `${baseUrl}/${id}`,

    })
    .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SINGLE_POST_SUCCESS, payload: res.data.post});
    })
    .catch(err => {
        dispatch({ type: FETCH_SINGLE_POST_FAILURE, payload: err});
    });
};

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