import React, { Component } from 'react';
import RemoveButton from '../RemoveButton/RemoveButton';

export default class DetailConatiner extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title text-truncate"
                    data-toggle="tooltip"
                    data-placement="left"
                    title={this.props.fruit.itemName}>
                    {this.props.fruit.itemName}
                </h5>
                <p className="card-text">
                    <span className="h3">$ {this.props.fruit.price} </span>
                    {this.props.fruit.quantityRemaining} in Stock
                </p>
                <RemoveButton selectedItem={this.props.fruit} />
            </div>
        );
    }
}