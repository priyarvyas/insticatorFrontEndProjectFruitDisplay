import React, { Component } from 'react';
import './Card.css';
import CardDetailContainer from './CardDetailContainer/CardDetailContainer';

export default class Card extends Component {

    render() {
        return (
            <div className="card">
                <img src={this.props.fruit.imgSrc} className="card-img" alt="..." />
                <CardDetailContainer fruit={this.props.fruit} />
            </div>
        );
    }
}