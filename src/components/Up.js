import React from "react";

const Up = () => {
  return (
    <a href="#header" className="w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        className="border rounded-2xl p-2 bg-cyan-800 hover:bg-cyan-900 border-0"
      >
        <path
          fill="none"
          stroke="rgb(52 211 153)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="m12 5l6 6m-6-6l-6 6m6-6v14"
        />
      </svg>
    </a>
  );
};

export default Up;
