import {FETCH_POSTS} from '../actions/types';

const initialState = {
    items: []
    // "item" is the new post
    // TO ADD IT USE A COMMMA
    // item: {}
};

export default function postReducer(state = initialState, action) {
    // the "action" parameter that is the same as dispatch
    // "action" = dispatch 
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
                // "action.payload" is the array of 100 objects = all posts
            };
            default:
            return state;
    }
}
