import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Main from "../Assets/Images/home-main.svg";

const Header = () => {
  return (
    <header className="flex h-[100%] lg:flex-row flex-col justify-around  md:px-9 px-3 text-2xl md:text-[3.2rem] text-[2.5rem] pt-28">
      <div className="self-center leading-[4.3rem] lg:leading-none lg:text-start text-center lg:mt-0 mt-10  w-full">
        <h1 className="text-white p-2 lg:p-4">
          Hi There!
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1 className="text-white px-2 lg:p-4 lg:pb-10 sm:text-[3.2rem]  text-[2rem] ">
          I'M <strong className="text-[rgb(205,95,248)]">TAYYAB JUNAID</strong>
        </h1>

        <span
          style={{
            color: "white",
            fontWeight: "bold",
            paddingLeft: "1rem",
          }}
        >
          <Typewriter
            words={["React JS Developer", "Web Designer", "Website Creator"]}
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor="white"
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={Main} className="w-[80%]" alt="Main" />
      </div>
    </header>
  );
};

export default Header;
