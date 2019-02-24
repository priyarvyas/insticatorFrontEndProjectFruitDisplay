import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { CardListConatiner } from './components/CardList/CardList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <Navbar />
          <CardListConatiner />
        </div>
      </div>
    );
  }
}
