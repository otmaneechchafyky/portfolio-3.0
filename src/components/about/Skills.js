import React from "react";

const Skills = () => {
  const myKnowledge = [
    "Ruby",
    "Ruby On Rails",
    "JavaScript",
    "React",
    "PostgreSQL",
    "Bootstrap",
    "Tailwind",
    "Sass",
    "Git",
    "GitHub",
    "Agile",
  ];

  let learning = ["Python", "Django", "Bash"];

  return (
    <div className="flex flex-col font-semibold">
      <span className="text-yellow-300 text-3xl">{"{"}</span>
      <div className="flex flex-col gap-4 pl-12">
        <span className="text-gray-400">
          /* Every day that goes by without learning a new skill, new friend or
          new information is a meaningless day ;) */
        </span>
        <p>
          <span className="text-red-500 pr-2">const</span>{" "}
          <span className="text-green-500 pr-2">myKnowledge</span> ={" "}
          <span className="text-sky-300">[</span>
          <p className="grid grid-cols-3 pl-12">
            {myKnowledge.map((item, index) => (
              <span key={index} className="pr-2 w-auto">
                '{item}'{index !== learning.length - 1 ? "," : ""}
              </span>
            ))}
          </p>
          <span className="text-sky-300 pr-1">]</span>;
        </p>
        <p className="flex gap-1">
          <span className="text-red-500 pr-2">let</span>{" "}
          <span className="text-green-500 pr-2">learning</span> ={" "}
          <span className="text-sky-300">[</span>
          {learning.map((item, index) => (
            <span key={index} className="pr-2">
              '{item}'{index !== learning.length - 1 ? "," : ""}
            </span>
          ))}
          <span className="text-sky-300 pr-1">]</span>;
        </p>
      </div>
      <span className="text-yellow-300 text-3xl">
        {"}"}
        <span className="text-white pl-1">;</span>
      </span>
    </div>
  );
};

export default Skills;
