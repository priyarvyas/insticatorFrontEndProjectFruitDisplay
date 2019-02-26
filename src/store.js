import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { INITIAL_STATE } from './reducers/fruitReducer';

const enhancerArgs = [
    applyMiddleware(
        thunk
    )
];

let enhancers = compose(...enhancerArgs);

export const store = createStore(
    rootReducer,
    INITIAL_STATE,
    enhancers
);