import { combineReducers } from 'redux';
import { fruitListReducer } from './fruitReducer';
export const rootReducer = combineReducers({
    fruitList: fruitListReducer
});