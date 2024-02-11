import React from "react";
import { FaWindows } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
const Tools = () => {
  return (
    <section className="mt-10 text-center">
      <h1 className="text-[rgb(205,95,248)] text-4xl">
        Tools <strong className="text-white">I use</strong>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 md:m-20 mt-5">
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <FaWindows className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <TbBrandVscode className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <SiNetlify className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <FaSlack className="text-white text-8xl" />
        </div>
        <div className="h-32 w-44 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] text-[4.5em] overflow-hidden p-[10px] text-center transition align-middle flex justify-center items-center hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.09]">
          <IoLogoVercel className="text-white text-8xl" />
        </div>
      </div>
    </section>
  );
};
export default Tools;
