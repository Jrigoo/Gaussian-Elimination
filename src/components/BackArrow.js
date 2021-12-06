import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

import "../index.css";

function BackArrow() {
  const { refresh } = React.useContext(Context);
  return (
    <Link
      to="/"
      className="absolute top-0 left-0 cursor-pointer"
      onClick={refresh}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="BackArrow"
        className={`rounded-full border-2 border-gray-900 text-gray-900`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </Link>
  );
}

export { BackArrow };
