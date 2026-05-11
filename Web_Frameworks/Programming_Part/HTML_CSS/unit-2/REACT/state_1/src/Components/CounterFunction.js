import React, { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Function Counter</h2>
        <p className="counter-display">{count}</p>
        <div className="counter-buttons">
          <button className="counter-button" onClick={decrement}>
            -
          </button>
          <button className="counter-button counter-reset" onClick={reset}>
            Reset
          </button>
          <button className="counter-button" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterFunction;
