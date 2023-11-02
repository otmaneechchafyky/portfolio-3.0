import React, { useState } from "react";
import Title from "../components/Title";
import WhoAmI from "../components/about/WhoAmI";
import Education from "../components/about/Educations";
import Certificates from "../components/about/Certificates";
import Skills from "../components/about/Skills";
import Up from "../components/Up"

const About = () => {
  const [selectedElement, setselectedElement] = useState("whoAmI");

  const displayElement = () => {
    switch (selectedElement) {
      case "whoAmI":
        return <WhoAmI />;
      case "education":
        return <Education />;
      case "certificates":
        return <Certificates />;
      case "skills":
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <section className="px-24 mb-24 flex flex-col gap-12" id="about">
      <Title num="02" name="About" />
      <div className="flex gap-16">
        <nav className="flex flex-col text-3xl text-white font-semibold gap-2">
          <button
            className={`px-12 py-8 w-80 border-2 bg-cyan-900 hover:cursor-pointer hover:bg-cyan-700 duration-150 rounded-lg ${
              selectedElement === "whoAmI"
                ? "text-emerald-400 border-2 border-emerald-400"
                : ""
            }`}
            onClick={() => setselectedElement("whoAmI")}
          >
            WhoAmI ( )
          </button>
          <button
            className={`px-12 py-8 w-80 border-2 bg-cyan-900 hover:cursor-pointer hover:bg-cyan-700 duration-150 rounded-lg ${
              selectedElement === "education"
                ? "text-emerald-400 border-2 border-emerald-400"
                : ""
            }`}
            onClick={() => setselectedElement("education")}
          >
            Education ( )
          </button>
          <button
            className={`px-12 py-8 w-80 border-2 bg-cyan-900 hover:cursor-pointer hover:bg-cyan-700 duration-150 rounded-lg ${
              selectedElement === "certificates"
                ? "text-emerald-400 border-2 border-emerald-400"
                : ""
            }`}
            onClick={() => setselectedElement("certificates")}
          >
            Certificates ( )
          </button>
          <button
            className={`px-12 py-8 w-80 border-2 bg-cyan-900 hover:cursor-pointer hover:bg-cyan-700 duration-150 rounded-lg ${
              selectedElement === "skills"
                ? "text-emerald-400 border-2 border-emerald-400"
                : ""
            }`}
            onClick={() => setselectedElement("skills")}
          >
            Skills ( )
          </button>
        </nav>
        <div className="bg-cyan-900 text-white px-12 py-6 text-2xl w-full">
          {displayElement()}
        </div>
      </div>
      <Up />
    </section>
  );
};

export default About;
