import * as types from './constants';

export const removeItemAction = fruit => ({ type: types.REMOVE_ITEM, fruit });
export const storeFruitList = fruitList => ({ type: types.LOAD_LIST, fruitList })