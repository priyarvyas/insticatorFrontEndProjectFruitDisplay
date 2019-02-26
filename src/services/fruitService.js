import myData from '../store_items.json';
import { storeFruitList, removeItemAction } from '../actions/fruitActions';
import { store } from '../store';

export function fetchFruitList() {
    store.dispatch(storeFruitList(myData));
}

export function getFruitList() {
    return store.getState().fruitList;
}

export function saveFruitList(fruitList) {
    store.dispatch(storeFruitList(fruitList));
}

export function updateItemCount(selectedItem) {
    if (selectedItem) {
        if (selectedItem.quantityRemaining > 0) {
            store.dispatch(removeItemAction(selectedItem));
        }
    }
}