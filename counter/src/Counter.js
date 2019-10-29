import React from 'react';
import useCounter from './useCounter';

const Counter = () => {
    const {count, increment} = useCounter();
    return (
        <div> 
            <button onClick={() => increment()}>{count}</button>
        </div>
    )
}


export default Counter;
