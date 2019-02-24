import React, { Component } from 'react';
import './RemoveButton.css';
import { updateItemCount } from '../../../services/fruitService';

export default class RemoveButton extends Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(selectedItem) {
        if (selectedItem.quantityRemaining > 0) {
            selectedItem.quantityRemaining = --selectedItem.quantityRemaining;
            updateItemCount(selectedItem);
        }
    }

    render() {
        return (
            <button className="btn btn-remove" disabled={this.props.selectedItem.quantityRemaining === 0}
                onClick={() => this.removeItem(this.props.selectedItem)}
            >
                Remove
            </button>
        );
    }
}