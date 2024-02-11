import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiGmail } from "react-icons/si";

const Find_Me = () => {
  return (
    <section className="p-3 leading-[4rem]">
      <div className="container text-center">
        <h1 className="uppercase text-white text-4xl font-bold">find me on</h1>
        <p className="text-white text-[1.2em]">
          Feel free to{" "}
          <strong className="text-[rgb(205,95,248)]">connect</strong> with me at
        </p>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-5">
          <li className="bg-white rounded-full p-2  hover:shadow-[0_0_10px_#87209e,0_0_10px_#87209e] hover:bg-black">
            <a href="" className="text-xl text-[rgb(205,95,248)]">
              <FaGithub />
            </a>
          </li>
          <li className="bg-white rounded-full p-2 hover:shadow-[0_0_10px_#87209e,0_0_10px_#87209e] hover:bg-black">
            <a href="" className="text-xl text-[rgb(205,95,248)]">
              <TiSocialLinkedinCircular />
            </a>
          </li>
          <li className="bg-white rounded-full p-2 hover:shadow-[0_0_10px_#87209e,0_0_10px_#87209e] hover:bg-black">
            <a href="" className="text-xl text-[rgb(205,95,248)]">
              <SiGmail />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Find_Me;
