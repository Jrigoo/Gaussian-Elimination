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
          className="absolute top-0 right-0 text-gray-800 cursor-pointer hidden lg:block lg:h-16 lg:w-16 lg:m-10"
          id="git-hub"
        />
      </a>

      <h1
        className={`w-full py-10 text-5xl font-semibold text-gray-800 text-center self-center sm:text-7xl md:text-8xl xl:text-9xl`}
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
            className={`text-lg text-gray-800 group-hover:text-gray-50 text-center sm:text-xl md:text-2xl xl:text-3xl`}
          >
            Calculadora
          </h2>
          <p
            className={`text-sm text-gray-700 font-extralight group-hover:text-white text-center sm:text-lg md:text-xl xl:text-2xl`}
          >
            Usar la calculadora
          </p>
        </Link>
        <Link
          className="group mx-4 p-3 rounded border-2 border-gray-300 hover:bg-red-500 "
          to="/code"
        >
          <h2
            className={`text-lg text-gray-800 group-hover:text-gray-50 text-center sm:text-xl md:text-2xl xl:text-3xl`}
          >
            Código
          </h2>
          <p
            className={`text-sm text-gray-700 font-extralight group-hover:text-white text-center m:text-lg md:text-xl xl:text-2xl`}
          >
            Ver el codigo principal
          </p>
        </Link>
      </div>
    </div>
  );
}

export { Main };
