import "./App.css";
import { useState } from "react";
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const calculator = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const createDigit = () => {
    const digites = [];

    for (let i = 1; i < 10; i++) {
      digites.push(
        <button
          onClick={() => {
            calculator(i.toString());
          }}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digites;
  };

  const getResult = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          
          {calc || "0"}
        </div>
        <div className="operatores">
          <button
            onClick={() => {
              calculator("/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              calculator("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              calculator("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              calculator("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              deleteLast();
            }}
          >
            DEL
          </button>
        </div>

        <div className="digits">
          {createDigit()}
          <button
            onClick={() => {
              calculator("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              calculator(".");
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              getResult();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
