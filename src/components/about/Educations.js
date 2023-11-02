import React from "react";

const Education = () => {
  const info = {
    highSchool: true,
    bachelor: true,
    onload: "Microverse",
  };

  return (
    <div div className="flex flex-col gap-4 font-semibold">
      <span className="text-yellow-300 text-3xl">{"{"}</span>
      <div className="flex flex-col gap-4 pl-12">
        <span className="text-gray-400">
          /* {"Firstly, it is not about degrees."}
          <br />
          {"It is about your skills, your creativity and yourself :)"} */
        </span>
        <p className="flex gap-1">
          <span className="text-red-500">this</span>.
          <span className="text-yellow-600">highSchool</span>={" "}
          <span className="text-sky-400">{info.highSchool.toString()}</span>;
        </p>
        <p className="flex gap-1">
          <span className="text-red-500">this</span>.
          <span className="text-yellow-600">bachelor</span>={" "}
          <span className="text-sky-400">{info.bachelor.toString()}</span>;
        </p>
        <p className="flex gap-1">
          <span className="text-red-500">this</span>.
          <span className="text-yellow-600">onload</span>={" "}
          <span>'{info.onload}'</span>;
        </p>
      </div>
      <span className="text-yellow-300 text-3xl">
        {"}"}
        <span className="text-white pl-1">;</span>
      </span>
    </div>
  );
};

export default Education;
