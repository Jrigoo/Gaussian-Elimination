import React from "react";
import { solve } from "../method";

const Context = React.createContext();

function Provider({ children }) {
  const [incog, setIncog] = React.useState("");
  const [values, setValues] = React.useState([]);
  const [inputs, setInputs] = React.useState([]);
  const [result, setResult] = React.useState("");

  let [error, setError] = React.useState("");

  React.useEffect(() => {
    setValues([]);
    setError("");
    setResult("");

    if (parseInt(incog) < 2) {
      setError("Numero de incognitas debe ser mayor a 1");
      setInputs([]);
      return;
    } else if (parseInt(incog) > 6) {
      setError("Numero de incognitas debe ser menor a 6");
      setInputs([]);
      return;
    } else if (incog !== "" && parseInt(incog) > 1 && parseInt(incog) < 7) {
      let a = Array.from(Array(parseInt(incog) * (parseInt(incog) + 1)).keys());
      setInputs(a);
    } else {
      setInputs([]);
    }
  }, [incog]);

  function refresh() {
    setIncog("");
    setValues([""]);
    setError("");
    setResult("");
    setInputs([]);
  }

  function handleMainInput(e) {
    setIncog(e.target.value);
  }

  function handleInputs(e, idx) {
    let newValues = [...values];
    newValues[idx] = parseInt(e.target.value);
    setValues(newValues);
    setError("");
  }

  function handleErrors() {
    if (incog === "") {
      setError("Debes añadir el número de incognitas");
      return true;
    } else if (
      values.includes(undefined) ||
      values.length < parseInt(incog) * (parseInt(incog) + 1) ||
      values.includes(NaN)
    ) {
      setError("La matriz debe estar completamente definida");
      return true;
    }
  }

  function createMatrix() {
    let e = handleErrors();
    if (!e) {
      setError("");

      let result = [];
      let j = 0;
      let current = parseInt(incog) + 1;
      for (let i = 0; i < parseInt(incog); i++) {
        let row = [];
        while (j < current) {
          row.push(values[j]);
          j++;
        }
        result.push(row);
        current += parseInt(incog) + 1;
      }
      setResult(solve(result));
    }
  }

  return (
    <Context.Provider
      value={{
        setIncog,
        setInputs,
        handleMainInput,
        handleInputs,
        createMatrix,
        setValues,
        refresh,
        result,
        values,
        error,
        incog,
        inputs,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
