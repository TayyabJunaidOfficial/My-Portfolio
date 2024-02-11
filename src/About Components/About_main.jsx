import React from "react";
import { AiOutlineFall } from "react-icons/ai";
import About from "../Assets/Images/about.png";
const About_main = () => {
  return (
    <section className="flex justify-center items-center p-5 lg:flex-row flex-col">
      <div className="w-[100%] p-10 self-center mt-28">
        <div className="lg:w-[85%] w-[100%] text-center">
          <h1 className="text-white text-center text-4xl leading-[3em]">
            Know Who <strong className="text-[rgb(205,95,248)]">I'M</strong>
          </h1>
          <p className="text-white text-[1.3rem] p-2">
            Hi Everyone, I am{" "}
            <strong className="text-[rgb(205,95,248)]">Tayyab Junaid</strong>{" "}
            from{" "}
            <strong className="text-[rgb(205,95,248)]">
              Sargodha, Pakistan.
            </strong>{" "}
            <br></br>I am currently employed as a React JS Developer. I have
            completed Associate Degree In Science (ADS).
            <br></br>
            <br></br>Apart from coding, some other activities that I love to do!
          </p>
        </div>
        <div className="flex justify-center sm:block self-center">
          <ul className="text-white text-[1.3rem] p-5">
            <li>
              <AiOutlineFall />
              Learning about new things
            </li>
            <AiOutlineFall />
            <li>Playing Games</li>
            <AiOutlineFall />
            <li>Reading Books</li>
          </ul>
        </div>
      </div>
      <div className="w-[70%] self-center flex justify-center items-center">
        <img src={About} alt="About Photo" />
      </div>
    </section>
  );
};

export default About_main;
