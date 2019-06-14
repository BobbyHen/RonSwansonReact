import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Button from './components/Button'
import QuoteDisplay from './components/QuoteDisplay'



class App extends Component {
  render() {
    return (
        <div className="main">
          <Title/>
          <QuoteDisplay/>
          <Button/>
        </div>
    );
  }
}


export default App;
