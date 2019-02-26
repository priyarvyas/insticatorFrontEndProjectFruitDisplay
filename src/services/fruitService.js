import myData from './store_items.json';
import { storeFruitList, removeItemAction } from '../actions/fruitActions';
import { store } from '../store';
import { HEIGHEST, LOWEST } from '../components/Navbar/Navbar.js';
import { sortPriceByHeighest } from '../utilities.js';

export function loadFruitsList() {
    store.dispatch(storeFruitList(myData));
}

export function sortFruitList(sortType) {
    let fruitList = store.getState().fruitList || [];
    switch (parseInt(sortType)) {
        case HEIGHEST:
            fruitList.sort(sortPriceByHeighest.bind(null, HEIGHEST));
            break;
        case LOWEST:
            fruitList.sort(sortPriceByHeighest.bind(null, LOWEST));
            break;
        default:
            fruitList = myData;
            break;
    }

    store.dispatch(storeFruitList(fruitList));
}

export function updateItemCount(selectedItem) {
    if (selectedItem) {
        if (selectedItem.quantityRemaining > 0) {
            store.dispatch(removeItemAction(selectedItem));
        }
    }
}