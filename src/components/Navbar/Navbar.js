import React, { Component } from 'react';
import './Navbar.css';
import { sortListByPrice } from '../../utilities';
import { saveFruitList, getFruitList } from '../../services/fruitService';

export const HEIGHEST = 1;
export const LOWEST = 2;

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        // to internally maintain the state of sorting type
        this.state = {
            sortType: null
        }
        this.sortList = this.sortList.bind(this);
    }

    sortList(sortType) {
        let fruitList = getFruitList();
        switch (parseInt(sortType)) {
            case HEIGHEST:
                fruitList.sort(sortListByPrice.bind(null, HEIGHEST));
                break;
            case LOWEST:
                fruitList.sort(sortListByPrice.bind(null, LOWEST));
                break;
            default:
                break;
        }
        saveFruitList(fruitList);
    }

    componentDidUpdate() {
        this.sortList(this.state.sortType);
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-row bd-highlight justify-content-between align-items-end">
                    <div className="nav-item ml-5 color-green text-white">
                        Fruits
                    </div>
                    <div className="nav-dropdown mr-3">
                        <label>Sort by Price: </label>
                        <div className="select-container">
                            <select className="select-sort" id="sort" onChange={(e) => this.setState({
                                sortType: e.target.value
                            })}>
                                <option value="">--select--</option>
                                <option value={HEIGHEST}>highest</option>
                                <option value={LOWEST}>lowest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="divider" />
            </div >
        );
    }
}