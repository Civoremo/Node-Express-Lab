import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from '../actions';

const initialState = {
    posts: [],
    postById: [],
    fetchPosts: false,
    fetchPostById: false,
    error: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_START:
            return {
                ...state,
                fetchPosts: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                error: null,
                fetchPosts: false,
                posts: action.payload,
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchPosts: false,
            };
        default:
            return state;
    }
}
