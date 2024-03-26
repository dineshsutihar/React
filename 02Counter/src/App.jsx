import "./App.css";
import { useState } from "react";

function App() {
  // useState is a hook that allows you to have state variables in functional components
  // useState returns an array with two elements
  // The first element is the current value of the state variable
  // The second element is a function that allows you to update the state variable

  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
      console.log(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((counter -= 1));
      console.log(counter);
    }
  };

  const displayCode = () => {
    const values = document.getElementById("hidden");
    if (values.style.display === "block") {
      values.style.display = "none";
      return;
    }
    values.style.display = "block";
    values.innerText = `
    import { useState } from "react";
    function App() {
      let [counter, setCounter] = useState(15);

      const addValue = () => {
        if (counter < 20) setCounter(counter += 1);
      };

      const removeValue = () => {
        if (counter > 0) setCounter(counter -= 1);
      };

      return (
        <>
          <h1>React Project</h1>
          <h2>Counter Value: {counter}</h2>
          <button onClick={addValue}>Add Value</button>
          <br />
          <button onClick={removeValue}> Remove Value </button>
          <p>This is paragraph no: {counter}</p>
        </>
      );
    }
    `;
  };

  return (
    <>
      <h1>React Project to count incremented and decremented values:</h1>
      <i>
        <p
          style={{
            fontSize: "10px",
          }}
        >
          This project helps to understand then hooks in react specially
          useState. and how to change the values in multiple place just using
          one syntax.
        </p>
      </i>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
        }}
      >
        Add Value
      </button>
      <br />
      <button
        onClick={removeValue}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
        }}
      >
        Remove Value
      </button>

      <p>This is paragraph no: {counter}</p>
      <button onClick={displayCode}>Click here to view Code</button>
      <pre>
        <code
          id="hidden"
          style={{
            display: "none",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            margin: "10px auto",
            borderRadius: "5px",
            width: "550px",
            height: "auto",
            overflow: "auto",
            textAlign: "left",
          }}
        ></code>
      </pre>
    </>
  );
}

export default App;
