import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <section className="mt-10 md:flex md:flex-row flex-col md:justify-around p-4 bg-[#1b1a2ea9] shadow-[0_10px_10px_-10px_rgba(9,5,29,0.171)] backdrop-blur-lg">
      <p className="text-white text-md md:text-left text-center">
        Designed and Developed by Tayyab Junaid
      </p>
      <div className="flex justify-center items-center">
        <ul className="flex gap-5">
          <li className="rounded-full p-2  hover:shadow-[0_0_10px_#87209e,0_0_10px_#87209e] hover:bg-black">
            <a
              href="https://github.com/TayyabJunaidOfficial"
              className="text-xl text-[rgb(205,95,248)]"
            >
              <FaGithub />
            </a>
          </li>
          <li className="rounded-full p-2 hover:shadow-[0_0_10px_#87209e,0_0_10px_#87209e] hover:bg-black">
            <a href="" className="text-xl text-[rgb(205,95,248)]">
              <TiSocialLinkedinCircular />
            </a>
          </li>
          <li className="rounded-full p-2 hover:shadow-[0_0_10px_#87209e,0_0_10px_#87209e] hover:bg-black">
            <a
              href="https://mail.google.com/tayyabjunaidofficial"
              className="text-xl text-[rgb(205,95,248)]"
            >
              <SiGmail />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
