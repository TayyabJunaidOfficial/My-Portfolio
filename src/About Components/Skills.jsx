import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="mt-10 text-center">
      <h1 className="text-white text-4xl">
        Professional{" "}
        <strong className="text-[rgb(205,95,248)]">Skillset</strong>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 m-20 mt-5">
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <FaHtml5 className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <FaCss3Alt className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <FaBootstrap className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <IoLogoJavascript className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <SiTailwindcss className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <FaReact className="text-white text-8xl" />
        </div>
      </div>
    </section>
  );
};
export default Skills;
