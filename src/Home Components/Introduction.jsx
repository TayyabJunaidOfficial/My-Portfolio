import React from "react";
import Avatar from "../Assets/Images/avatar.svg";
const Introduction = () => {
  return (
    <section className="flex justify-center items-center p-5 lg:flex-row flex-col mt-28">
      <div className="container md:leading-[7em] leading-[4em] w-[100%] px-5 self-center">
        <h1 className="text-white uppercase text-[2.5rem] text-center">
          let me <strong className="text-[rgb(205,95,248)]">introduce</strong>{" "}
          myself
        </h1>
        <p className="text-white text-xl font-semibold md:leading-[3em] sm:leading-[2.5em] leading-[2em]">
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
        </p>
        <p className="text-white text-xl font-semibold md:leading-[3em] sm:leading-[2.5em] leading-[2em]">
          I am fluent in classics like{" "}
          <i className="text-[rgb(205,95,248)]">Javascript, React JS and Go.</i>
        </p>
        <p className="text-white text-xl font-semibold md:leading-[3em] sm:leading-[2.5em] leading-[2em]">
          My field of Interest's are building new{" "}
          <i className="text-[rgb(205,95,248)]">
            Web Technologies and Products
          </i>
          and also in areas related to{" "}
          <i className="text-[rgb(205,95,248)]">Blockchain.</i>
        </p>
        <p className="text-white text-xl font-semibold md:leading-[3em] sm:leading-[2.5em] leading-[2em]">
          Whenever possible, I also apply my passion for developing products
          with Node.js and{" "}
          <i className="text-[rgb(205,95,248)]">
            Modern Javascript Library and Frameworks
          </i>{" "}
          like
          <i className="text-[rgb(205,95,248)]"> React.js and Node.js</i>
        </p>
      </div>
      <div className="self-center w-[40%]">
        <img src={Avatar} alt="Avatar" className="lg:w-[70%] w-[80%]" />
      </div>
    </section>
  );
};

export default Introduction;
