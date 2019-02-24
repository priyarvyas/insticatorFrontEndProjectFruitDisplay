import React, { Component } from 'react';
import './Card.css';
import DetailConatiner from './DetailContainer/DetailContainer';

export default class Card extends Component {

    render() {
        return (
            <div className="card">
                <img src={this.props.fruit.imgSrc} className="card-img" alt="..." />
                <DetailConatiner fruit={this.props.fruit} />
            </div>
        );
    }
}