import React from "react";
import Title from "../components/Title";
import Projects from "./projects";
import Up from "../components/Up"

const Work = () => {
  return (
    <div className="px-24 mb-24 text-white" id="work">
      <Title num="03" name="Projects" />
      <div className="p-12 flex flex-col gap-16">
        {Projects.map((element) => (
            <div
            key={element.id}
            className={`flex gap-[1%] ${element.id % 2 === 0 ? "bg-transparent" : "flex-row-reverse"}`}
          >
            <a href={element.demo} target="_blank" rel="noreferrer" className="w-[52%]">
              <img src={element.screenshot} alt="Screenshot" className={`w-[100%] h-[22rem] border-[.4rem] border-emerald-400 rounded-lg grayscale-[70%] hover:grayscale-0 hover:cursor-pointer duration-300 ${element.id % 2 === 0 ? "border-r-0 rounded-r-none" : "border-l-0 rounded-l-none"}`} />
            </a>
            <div className={`flex flex-col gap-6 w-[47%] ${element.id % 2 === 0 ? "items-end" : "items-start"}`}>
              <p className="font-monos text-lg font-semibold text-emerald-400">Featured Project <span className="text-white">0{element.id}</span></p>
              <p className="text-2xl font-bold">{element.title}</p>
              <p className={`min-w-[115%] text-md bg-[#062632] p-6 rounded relative z-2 ${element.id % 2 === 0 ? "text-right" : "text-left"}`}>{element.description}</p>
              <ul className="flex gap-4">
                {element.teckStack.map((item) => (
                  <li key={item} className="font-monos p-1">{item}</li>
                ))}
              </ul>
              <div className="flex gap-12">
                <a href={element.demo} className="py-3 px-6 border-2 border-emerald-400 text-emerald-400 rounded-2xl font-bold hover:bg-emerald-400 hover:text-cyan-950 hover:scale-110 hover:shadow-emerald-600 duration-300">Demo</a>
                <a href={element.code} className="py-3 px-6 border-2 border-emerald-400 text-emerald-400 rounded-2xl font-bold hover:bg-emerald-400 hover:text-cyan-950 hover:scale-110 hover:shadow-emerald-600 duration-300">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Up />
    </div>
  );
};

export default Work;
