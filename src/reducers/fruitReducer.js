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
            let selectedFruit = state.find((x) => x.itemName === fruit.itemName)
            if (selectedFruit.quantityRemaining) {
                selectedFruit.quantityRemaining = selectedFruit.quantityRemaining - 1;
            }
            return state
        default:
            return state
    }
}