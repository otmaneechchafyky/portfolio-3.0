import React from "react";

const Title = (props) => {
  return (
    <div className="flex gap-8 items-center justify-center text-emerald-400 mb-16">
      <hr className="w-80 border border-emerald-400" />
      <p className="flex gap-1 text-3xl font-semibold">
        <span className="text-white font-monos">{props.num}.</span>
        <span>{props.name}</span>
      </p>
      <hr className="w-80 border border-emerald-400" />
    </div>
  );
};

export default Title;
