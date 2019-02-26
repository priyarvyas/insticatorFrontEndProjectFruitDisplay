import React, { Component } from 'react';
import Card from '../Card/Card'
import { connect } from 'react-redux';
import { fetchFruitList } from '../../services/fruitService';
import './CardList.css';

class CardList extends Component {

    componentWillMount() {
        fetchFruitList();
    }

    render() {
        return (
            <div className="card-list d-flex flex-wrap">
                {this.props.fruitList.length > 0 && this.props.fruitList.map((fruit, index) => {
                    return (
                        <Card fruit={fruit} key={index} />
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fruitList: state.fruitList
    }
};

export const CardListConatiner = connect(mapStateToProps)(CardList);