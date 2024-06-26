import React from "react";

function Counter({count, increment, decrement}) {

    return (
        <div>
            <h2>Counter App : {count}</h2>
            <button onClick={increment}>IncrementCounter</button>
            <button onClick={decrement}>DecrementCounter</button>
        </div>
    );
}

export default Counter;