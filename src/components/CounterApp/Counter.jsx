import React, { useState } from 'react';
import '../../App.css'
const Counter = () => {

  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(0)

  function changeInputHandle(e) {
    setInputValue(parseInt(e.target.value));
  }

  function increment() {
    if (inputValue > 0) {
      setCounterValue(parseInt(counterValue + inputValue))
    } else {
      setCounterValue(parseInt(counterValue + 1))
    }
  }

  function decrement() {
    if (counterValue === 0) return;
    setCounterValue(counterValue - 1)
  }


  function reset() {
    setCounterValue(0)
    setInputValue(0)
  }

  return (
    <div className="counterContainer">
      <h2>Counter App</h2>

      <p> Counter : <span className={counterValue > 0 ? "valueColor" : "disabled"}>{counterValue}</span> </p>
      <div className="btnContainer">
        <input type='number' value={inputValue} onChange={changeInputHandle} />
        <button onClick={() => (increment())}>Increment</button>
        <button className={counterValue === 0 ? "disabled" : ''} onClick={() => (decrement())}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </div>

    </div>
  );
};

export default Counter;