import React from "react";

const WhoAmI = () => {
  const name = "Otmane Echchafyky";
  const email = "otmaneechchafyky5@gmail.com";
  let ageInSeconds = 788400000;

  const aboutMe = "I am passionate about problem solving and web development";
  const coffee = "I don't like Coffee :(";

  return (
    <div className="text-2xl flex flex-col gap-4 font-semibold">
      <span className="text-yellow-300 text-3xl">{"{"}</span>
      <div className="flex flex-col gap-4 pl-12">
        <p className="flex gap-4">
          <span className="text-red-500">const</span>{" "}
          <span className="text-green-500">name</span> = <span>'{name}'</span>;
        </p>
        <p className="flex gap-4">
          <span className="text-red-500">const</span>{" "}
          <span className="text-green-500">email</span> = <span>'{email}'</span>
          ;
        </p>
        <p className="flex gap-4">
          <span className="text-red-500">let</span>{" "}
          <span className="text-green-500">ageInSeconds</span> ={" "}
          <span>{ageInSeconds}</span>;
        </p>
        <span className="text-gray-400">/* {aboutMe}</span>
        <span className="text-gray-400">{coffee} */</span>
      </div>
      <span className="text-yellow-300 text-3xl">
        {"}"}
        <span className="text-white pl-1">;</span>
      </span>
    </div>
  );
};

export default WhoAmI;
