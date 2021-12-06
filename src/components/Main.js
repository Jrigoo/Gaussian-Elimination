import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import "../index.css";

function Main() {
  return (
    <div className="w-full h-full flex flex-wrap" id="principal">
      <a href="https://github.com/Jrigoo">
        {" "}
        <BsGithub
          className="absolute top-0 right-0 text-gray-800 cursor-pointer"
          id="git-hub"
        />
      </a>

      <h1
        className={`w-full py-10 text-5xl font-semibold text-gray-800 text-center self-center`}
        id="main__title"
      >
        Eliminación Gaussiana
      </h1>
      <div className="w-full grid grid-cols-2 auto-rows-min gap-2 ">
        <Link
          className="group mx-4 p-3 rounded border-2 border-gray-300 hover:bg-red-500 "
          to="/calculator"
        >
          <h2
            className={`text-lg text-gray-800 group-hover:text-gray-50 text-center`}
          >
            Calculadora
          </h2>
          <p
            className={`text-sm text-gray-700 font-extralight group-hover:text-white text-center`}
          >
            Usar la calculadora
          </p>
        </Link>
        <Link
          className="group mx-4 p-3 rounded border-2 border-gray-300 hover:bg-red-500 "
          to="/code"
        >
          <h2
            className={`text-lg text-gray-800 group-hover:text-gray-50 text-center`}
          >
            Código
          </h2>
          <p
            className={`text-sm text-gray-700 font-extralight group-hover:text-white text-center`}
          >
            Ver el codigo principal
          </p>
        </Link>
      </div>
    </div>
  );
}

export { Main };
