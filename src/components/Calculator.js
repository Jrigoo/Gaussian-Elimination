import { BackArrow } from "./BackArrow";
import { Context } from "../context";

import React from "react";
import "../index.css";

function Calculator() {
  const {
    incog,
    inputs,
    handleMainInput,
    handleInputs,
    createMatrix,
    result,
    error,
  } = React.useContext(Context);

  const variables = ["x", "y", "z", "a", "b", "c"];

  return (
    <div
      id="calculator"
      className="px-5 w-full flex flex-wrap content-center justify-center"
    >
      {/* Arrow ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <BackArrow />
      {/* TITLE- -----------------------------------------------> */}
      <h1
        className={`w-full py-10 mt-3 text-5xl font-semibold text-gray-800 text-center self-center sm:text-7xl md:text-8xl xl:text-9xl`}
      >
        Calculadora
      </h1>
      {/* MAIN INPUT-----------------------------------------------> */}
      <input
        type="number"
        className={`p-5 w-full text-sm border-2 focus:border-red-300 hover:border-red-300 rounded outline-none sm:text-xl md:text-2xl xl:text-3xl`}
        placeholder="Número de Incognitas (max 6)"
        value={incog}
        onChange={handleMainInput}
      />
      {/* MATRIX INPUTSSS-----------------------------------------------> */}
      <div
        className={`w-full grid grid-cols-${
          parseInt(incog) + 1
        } grid-rows-${incog} gap-2 my-4`}
        id="inputs"
      >
        {inputs.map((idx) => {
          return (
            <input
              type="number"
              className={`w-4/6 py-2 text-sm text-gray-800 place-self-center text-center border-2 focus:border-red-300 hover:border-red-300 rounded outline-none sm:text-xl md:text-2xl xl:text-3xl`}
              placeholder={`${idx}`}
              onChange={(e) => handleInputs(e, idx)}
            />
          );
        })}
      </div>

      {/* ERROR ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {error ? (
        <h2
          className={`w-full text-sm text-center text-red-700 my-6 sm:text-xl md:text-2xl xl:text-3xl`}
        >
          {error}
        </h2>
      ) : (
        ""
      )}

      {/* CALC BUTTON ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <a
        onClick={createMatrix}
        className={`border-2 cursor-pointer rounded text-sm hover:border-red-300 text-gray-800 focus:border-red-300  outline-none mb-3 px-5 py-3 sm:text-xl md:text-2xl xl:text-3xl`}
      >
        Calcular
      </a>

      {/* RESULTADO ----------------------------------> */}
      <div className="w-full flex flex-wrap justify-around items-center">
        {result
          ? result.length < 2
            ? result.map((val) => {
                return (
                  <h1
                    className={` px-4 text-red-500 text-sm text-center sm:text-xl md:text-2xl xl:text-3xl`}
                  >
                    {val}
                  </h1>
                );
              })
            : result.map((val, idx) => {
                return (
                  <h1
                    className={`text-sm p-4 text-green-500 sm:text-xl md:text-2xl xl:text-3xl`}
                  >{`${variables[idx]} = ${val}`}</h1>
                );
              })
          : ""}
      </div>
    </div>
  );
}

export { Calculator };
