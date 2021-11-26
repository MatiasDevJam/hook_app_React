import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css'

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook { counter }</h1>
            <hr />

            <button onClick={ increment } className="btn btn-success">+1</button>
            <button onClick={ reset } className="btn btn-danger">Reset</button>
            <button onClick={ decrement } className="btn btn-success">-1</button>
        </>
    )
}
