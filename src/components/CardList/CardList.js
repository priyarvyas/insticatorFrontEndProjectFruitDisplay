import React, { Component } from 'react';
import Card from '../Card/Card'
import { connect } from 'react-redux';
import { loadFruitsList } from '../../services/fruitService';

class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFruit: {}
        }
    }

    componentWillMount() {
        loadFruitsList();
    }

    render() {
        return (
            <div className="d-flex flex-wrap justify-content-left ml-5">
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