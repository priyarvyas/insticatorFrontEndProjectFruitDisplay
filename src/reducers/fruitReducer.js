import { REMOVE_ITEM, LOAD_LIST } from '../actions/constants'

export const INITIAL_STATE = {}

export function fruitListReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_LIST:
            return [
                ...action.fruitList
            ]
        case REMOVE_ITEM:
            const fruit = action.fruit
            let index = state.findIndex((x) => x.itemName === fruit.itemName)
            if (state[index] && state[index].quantityRemaining > 0) {
                state[index].quantityRemaining = state[index].quantityRemaining - 1;
            }
            return [
                ...state
            ]

        default:
            return state
    }
}