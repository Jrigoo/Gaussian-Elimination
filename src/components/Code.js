import React from "react";

import { BackArrow } from "./BackArrow";
import { CodeBlock, dracula } from "react-code-blocks";

import "../index.css";

const solve = `const solve = (m) => {
  let newMatrix = [];
  for (let i = 0; i < m.length; i++) {
    let x = m[i].filter((v, idx) => idx !== 2);
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
      m[i] = add(m[i], multiply(multiply(m[j], m[i][j]), -1));
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
    <div id="codigo" className="px-5">
      <BackArrow />
      {/* TITLE- -----------------------------------------------> */}
      <h1
        className={`w-full py-9 text-5xl font-semibold text-gray-800 text-center self-center`}
      >
        Código
      </h1>

      <div className={`codigo py-5`}>
        <CodeBlock
          text={solve}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
        />
      </div>
      <p className={`text-sm text-justify text-gray-800 p-3`}>
        Esta función es la inicial. Determina si la matriz tiene solucion. En
        caso de que si, llama a la funcion que empieza el metodo de eliminación
        gaussiana. Y en caso de que no, envia un error. Para calcular el
        determinante la matriz debe ser cuadrada por lo tanto, la función crea
        una nueva matriz con los mismos valores pero sin la ultima columna.
      </p>

      <div className={`codigo py-5`}>
        <CodeBlock
          text={gaussianElim}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
        />
      </div>
      <p className={`text-sm text-justify text-gray-800 p-3`}>
        Esta función es la que se encarga de ejecutar el metodo de eliminación
        gaussiana. Lo que hace es iterar 3 varias veces la matriz asi lograr la
        diagonal de unos y los ceros.
      </p>

      <div className={`codigo py-5`}>
        <CodeBlock
          text={getResult}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
        />
      </div>
      <p className={`text-sm text-justify text-gray-800 pb-20`}>
        Esta función es la que se encarga de obtener el resultado. Teniendo ya
        la matriz con su diagonal de unos y los ceros. La función itera una vez
        mas sobre esta nueva matriz y realiza las operaciones correspondients
        para obtener nuestras incognitas
      </p>
    </div>
  );
}

export { Code };
