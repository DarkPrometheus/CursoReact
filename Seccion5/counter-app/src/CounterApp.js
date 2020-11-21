import React, { useState } from 'react';
import PropTypes from "prop-types"

const CounterApp = ( { value } ) => {
    
    const [counter, setCounter] = useState(0);

    const handleAdd = (e) => {
        setCounter(counter + 1);
    }
    const handleSub = (e) => {
        setCounter(counter - 1);
    }
    const handleRes = (e) => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRes}>Reset</button>
            <button onClick={handleSub}>-1</button>
        </>
    );
}

CounterApp.protoTypes = {
    value: PropTypes.number
}

export default CounterApp;

// raftcp