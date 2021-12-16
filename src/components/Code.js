import React from "react";

import { BackArrow } from "./BackArrow";
import { CodeBlock, dracula } from "react-code-blocks";

import "../index.css";

const solve = `const solve = (m) => {
  let newMatrix = [];
  for (let i = 0; i < m.length; i++) {
    let x = m[i].filter((v, idx) => idx !== m[0].length - 1);
    newMatrix.push(x);
  }
  let determinant = det(newMatrix);
  if (determinant === 0) {
    return ["Solución infinita"];
  } else {
    return gaussianElim(m);
  }
};`;

const gaussianElim = `const gaussianElim = (m) => {
  for (let i = 0; i < m.length; i++) {
    let j = 0;
    while (i > j) {
      m[i] = add(m[i], multiply(multiply(m[j], m[i][j]), -1)); //m[i] - m[j]*m[i][j]
      j += 1;
    }
    m[i] = divide(m[i], m[i][i]);

    //Revisamos la matriz para ver si no tiene solución
    if (m[i].includes(NaN) || m[i].includes(Infinity)) {
      return ["No hay solución"];
    }
  }
  return getResult(m);
  };
`;

const getResult = `const getResult = (m) => {
  let values = [];
  for (let i = m.length - 1; i >= 0; i--) {
    let idx = 0;
    let x = m[0].length - 2; 
    let variable = m[i][m[0].length - 1]; 
  
    while (idx < values.length) {
      variable = variable - m[i][x] * values[idx];
      idx++;
      x--;
    }
    values.push(round(variable, 3));
  }
  return values.reverse();
};`;

function Code() {
  return (
    <div id="codigo" className="w-full flex flex-wrap justify-center">
      <BackArrow />
      {/* TITLE- -----------------------------------------------> */}
      <h1
        className={`w-full py-9 text-5xl font-semibold text-gray-800 text-center self-center sm:text-7xl md:text-8xl xl:text-9xl`}
      >
        Código
      </h1>

      <div className={`codigo text-xs py-5 sm:text-lg w-5/6`}>
        <CodeBlock
          text={solve}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
        />
      </div>
      <p
        className={`text-sm text-justify text-gray-800 p-3 sm:text-lg md:text-xl xl:text-2xl w-5/6`}
      >
        Esta función es la inicial. Determina si la matriz tiene solucion. En
        caso de que si, llama a la funcion que empieza el metodo de eliminación
        gaussiana. Y en caso de que no, envia un error. Para calcular el
        determinante la matriz debe ser cuadrada por lo tanto, la función crea
        una nueva matriz con los mismos valores pero sin la ultima columna.
      </p>

      <div className={`codigo text-xs py-5 sm:text-lg w-5/6`}>
        <CodeBlock
          text={gaussianElim}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
        />
      </div>
      <p
        className={`text-sm text-justify text-gray-800 p-3 sm:text-lg md:text-xl xl:text-2xl w-5/6`}
      >
        Esta función es la que se encarga de ejecutar el metodo de eliminación
        gaussiana. Lo que hace es iterar 3 varias veces la matriz asi lograr la
        diagonal de unos y los ceros.
      </p>

      <div className={`codigo text-xs py-5 sm:text-lg w-5/6`}>
        <CodeBlock
          text={getResult}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
        />
      </div>
      <p
        className={`text-sm text-justify text-gray-800 pb-20 sm:text-lg md:text-xl xl:text-2xl w-5/6`}
      >
        Esta función es la que se encarga de obtener el resultado. Teniendo ya
        la matriz con su diagonal de unos y los ceros. La función itera una vez
        mas sobre esta nueva matriz y realiza las operaciones correspondients
        para obtener nuestras incognitas
      </p>
    </div>
  );
}

export { Code };
