import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // setCounter gives a callBack.. prevCounter is the current value of the counter state.

  const addValue = () => {
    // given below code will add 2 to counter
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    // given below code does not add 2 to counter that's how batching works in react
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
