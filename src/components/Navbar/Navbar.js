import React, { Component } from 'react';
import './Navbar.css';

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
                            <select className="select-sort" id="sort">
                                <option value="highest">highest</option>
                                <option>lowest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="color-green p-1" />
            </div>
        );
    }
}