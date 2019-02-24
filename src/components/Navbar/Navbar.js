import React, { Component } from 'react';
import './Navbar.css';
import { sortFruitList } from '../../services/fruitService';

export const HEIGHEST = 1;
export const LOWEST = 2;

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <div className="d-flex flex-row bd-highlight justify-content-between">
                    <div className="nav-item ml-5 color-green text-white">
                        Fruits
                    </div>
                    <div className="mr-3 align-self-end">
                        <label>Sort by Price: </label>
                        <div className="select-container">
                            <select className="select-sort" id="sort" onChange={(e) => sortFruitList(e.target.value)}>
                                <option value="">--select--</option>
                                <option value={HEIGHEST}>highest</option>
                                <option value={LOWEST}>lowest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="divider" />
            </div>
        );
    }
}