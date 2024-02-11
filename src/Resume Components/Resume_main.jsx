import React from "react";
import CV from "../Assets/Images/Tayyab_Junaid_CV.jpg";
const Resume_Main = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={CV} alt="My CV" className="w-[70%] mt-5 border border-white" />
    </div>
  );
};
export default Resume_Main;
