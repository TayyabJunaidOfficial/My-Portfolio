// import React from "react";
// import { FaDownload } from "react-icons/fa6";

// const Resume = () => {
//   const download = document.getElementById("download");
//   download.addEventListener("click", (e) => {
//     e.preventDefault();
//   });
//   return (
//     <section className=" p-5 lg:flex-row flex-col">
//       <div className="w-[100%] flex justify-center items-center mt-20">
//         <a
//           id="download"
//           className="text-white px-4 py-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
//         >
//           <FaDownload className="pt-[2px]" />
//           Download CV
//         </a>
//       </div>
//     </section>
//   );
// };
// export default Resume;

// import React from "react";
// import { FaDownload } from "react-icons/fa6";

// const Resume = () => {
//   const handleDownload = (e) => {
//     e.preventDefault();
//     // Add your download logic here if needed
//     // For example, you can use window.location.href to navigate to the download URL
//     window.location.href = "../Assets/Images/Tayyab_Junaid_CV.jpg"; // Replace with your actual download URL
//   };

//   return (
//     <section className="p-5 lg:flex-row flex-col">
//       <div className="w-[100%] flex justify-center items-center mt-20">
//         <a
//           href="/path/to/your/resume.pdf" // Replace with your actual download URL
//           onClick={handleDownload}
//           className="text-white px-4 py-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
//         >
//           <FaDownload className="pt-[2px]" />
//           Download CV
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Resume;

import React from "react";
import { FaDownload } from "react-icons/fa6";
import Tayyab_Junaid_CV from "../Assets/Images/Tayyab_Junaid_CV.jpg";

const Resume = () => {
  return (
    <section className="p-5 lg:flex-row flex-col">
      <div className="w-[100%] flex justify-center items-center mt-20">
        <a
          href={Tayyab_Junaid_CV}
          download="Tayyab_Junaid_CV"
          className="text-white px-4 py-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
        >
          <FaDownload className="pt-[2px]" />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
