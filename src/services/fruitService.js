import myData from './store_items.json';
import { storeFruitList } from '../actions/fruitActions';
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
        const fruitList = store.getState().fruitList || [];
        if (fruitList) {
            fruitList.map((fruit) => {
                if (fruit.itemName === selectedItem.itemName) {
                    fruit.quantityRemaining = selectedItem.quantityRemaining;
                }
                return fruit;
            });
            store.dispatch(storeFruitList(fruitList));
        }
    }
}