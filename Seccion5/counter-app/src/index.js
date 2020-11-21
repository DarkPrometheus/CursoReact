import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import "./index.css"
import CounterApp from './CounterApp';

ReactDOM.render(
    <CounterApp value={ 738 }/>,
    document.querySelector("#root")
);