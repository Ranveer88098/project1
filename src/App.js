import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const getCounterColor = () => {
    if (count < 5) {
      return "green";
    } else if (count < 10) {
      return "blue";
    } else {
      return "red";
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: getCounterColor() }}>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
