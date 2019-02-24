import { REMOVE_ITEM, LOAD_LIST } from '../actions/constants'

export const INITIAL_STATE = {}

export function fruitListReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_LIST:
            return [
                ...action.fruitList
            ]
        case REMOVE_ITEM:
            return state
        default:
            return state
    }
}