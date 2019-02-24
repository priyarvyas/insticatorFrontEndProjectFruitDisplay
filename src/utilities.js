import { HEIGHEST, LOWEST } from "./components/Navbar/Navbar";

export function sortPriceByHeighest(sortType, a, b) {
    const priceA = a.price;
    const priceB = b.price;

    let comparison = 0;
    if (priceA < priceB) {
        comparison = sortType === HEIGHEST ? 1 : -1;
    } else if (priceA > priceB) {
        comparison = sortType === LOWEST ? 1 : -1;
    }
    return comparison;
}