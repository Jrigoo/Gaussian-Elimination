import { det, multiply, add, divide } from "mathjs";

function round(value, decimals) {
  /* 
  Funcion para redondear
  */
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

const getResult = (m) => {
  /* Por ultimo, se obtienen las respuestas de la matriz 
    ya modificada. Lo que se hace es obtener la ultima columna
    y hacer las operaciones correspondients para obtener
    la respuesta
    */
  let values = [];

  for (let i = m.length - 1; i >= 0; i--) {
    let idx = 0;
    let x = m[0].length - 2; //Penultima columna

    let variable = m[i][m[0].length - 1]; //Ultima columna

    //Operacion asi obtener el valor de cada variable
    while (idx < values.length) {
      variable = variable - m[i][x] * values[idx];
      idx++;
      x--;
    }
    values.push(round(variable, 3));
  }
  return values.reverse();
};

const gaussianElim = (m) => {
  /* Funcion principal. Esta se encarga de ejecutar el metodo
     principal de eliminación gaussiana. Itera en la matriz
     asi logra las diagonal unitaria y ceros
  */

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

const solve = (m) => {
  /* Determina si la matriz tiene solucion. 
    En caso de que si, llama a la funcion que empieza el 
    metodo. Para ver el determinante hay que eliminar la ultima
    columna */
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
};

export { solve };
