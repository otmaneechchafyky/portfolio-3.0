import React from "react";
import avatarImage from "../assets/avatar.png";
import resume from "../assets/moncv.docx";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Moroccan.", "a developer.", "your next employee."],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 500,
    deleteSpeed: 70,
  });
  return (
    <section className="h-[100vh] flex gap-4 pt-24" id="home">
      <div className="px-24 text-white flex flex-col gap-8 items-start">
        <p className="text-2xl font-bold">Hello there, it's me.</p>
        <h1 className="text-5xl font-bold tracking-wide">Otmane Echchafyky.</h1>
        <p className="font-monos text-2xl">
          I am <span className="text-emerald-400 font-semibold">{text}</span>
          <Cursor />
        </p>
        <div className="flex flex-col">
          <BiSolidQuoteLeft className="text-emerald-300 w-6 h-6" />
          <p className="text-lg tracking-wide pl-6 pt-2">
            Allah loves someone who when works, he performs it in perfect manner
          </p>
        </div>
        <button
          type="button"
          className="border-2 px-8 py-2 text-lg font-semibold rounded-lg font-monos hover:text-white hover:bg-cyan-700 duration-300"
        >
          <a href={resume}>HIRE ME</a>
        </button>
      </div>
      <div className="w-[50%] p-4">
        <img
          src={avatarImage}
          alt="Avatar"
          className="avatar w-[70%] rounded-full border-2 border-white animate-buble delay-600 bg-emerald-400"
        />
      </div>
    </section>
  );
};

export default Hero;
