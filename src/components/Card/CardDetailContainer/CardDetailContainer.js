import React, { Component } from 'react';
import { Button } from '../../Button/Button';
import { updateItemCount } from '../../../services/fruitService';

export default class CardDetailConatiner extends Component {

    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(fruit) {
        if (fruit.quantityRemaining > 0) {
            updateItemCount(fruit);
        }
    }

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
                <Button
                    title={`Remove`}
                    handleOnClick={() => this.removeItem(this.props.fruit)}
                    disabled={this.props.fruit.quantityRemaining === 0} />
            </div>
        );
    }
}