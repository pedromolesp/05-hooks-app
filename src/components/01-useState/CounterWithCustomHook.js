import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import "./counter.css";

export const CounterWithCustomHook = () => {


    const { state: counter, increment, decrement, reset } = useCounter();
    return (
        <div>
            <h1>Counter with hook: {counter}</h1>

            <hr />
            <button className="btn" onClick={() => increment(2)}>+1</button>
            <button className="btn" onClick={() => decrement(2)}>-1</button>
            <button className="btn" onClick={reset}>Reset</button>

        </div>
    )
}
