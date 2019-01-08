import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_SINGLE_POST_START,
    FETCH_SINGLE_POST_SUCCESS,
    FETCH_SINGLE_POST_FAILURE,
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
        // Fetch Post By ID
        case FETCH_SINGLE_POST_START:
            return {
                ...state,
                fetchPostById: true,
            };
        case FETCH_SINGLE_POST_SUCCESS:
            return {
                ...state,
                fetchPostById: false,
                postById: action.payload,
                error: null,
            };
        case FETCH_SINGLE_POST_FAILURE:
            return {
                ...state,
                fetchPostById: false,
                error: action.payload,
            };

        // Fetch All Posts Cases
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
