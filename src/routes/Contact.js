import React from "react";
import Title from "../components/Title";
import Up from "../components/Up"

const Contact = () => {
  return (
    <div className="px-24 mb-24" id="contact">
      <Title num="04" name="Contact" />
      <div className="flex flex-col items-center w-full relative">
        <form
          action="https://formsubmit.co/otmaneechchafyky5@gmail.com"
          method="POST"
          className="mt-[5rem] w-[56%] h-[17.80rem] absolute border-emerald-300 border-t-[3px] border-r-[3px] border-l-[3px] bg-cyan-950 flex flex-col items-center gap-2 py-4 rounded"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 text-white bg-cyan-900 w-[80%] border-0 outline-none rounded placeholder:text-zinc"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 text-white bg-cyan-900 w-[80%] border-0 outline-none rounded placeholder:text-zinc"
          />
          <textarea
            placeholder="Your message"
            className="p-2 text-white bg-cyan-900 w-[80%] border-0 outline-none rounded placeholder:text-zinc"
          />
          <button
            type="submit"
            className="mt-6 rounded-lg px-4 py-2 bg-emerald-600 text-emerald-100 hover:bg-emerald-800 duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="w-[70%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(8 51 68)"
          viewBox="0 0 24 24"
          strokeWidth={0.1}
          stroke="#6ee7b7"
          className="w-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
          />
        </svg>
        </div>
      </div>
      <Up />
    </div>
  );
};

export default Contact;
