import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers'


const initialState = {};

const middeleware = [thunk];

const store = createStore(
    postReducer,
    initialState,
    compose(
        applyMiddleware(...middeleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;