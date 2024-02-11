import React from "react";
import ExpenseTracker from "../Assets/Images/Expense-Tracker.PNG";
import Tasckr from "../Assets/Images/Tasckr.PNG";
import ToDoList from "../Assets/Images/To-Do-List.PNG";
import DentalDummy from "../Assets/Images/Dental-Dummy.PNG";
import Netflix from "../Assets/Images/Netflix.PNG";
import CustomWebsite from "../Assets/Images/Custom-Website.PNG";
import { FaGithub } from "react-icons/fa";
import { SlActionRedo } from "react-icons/sl";
const All_Projects = () => {
  return (
    <section className="mt-10 text-center">
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center lg:gap-8 gap-4 lg:m-28 m-10 mt-5">
        <div className="h-[100%] lg:w-[30%] md:w-[80%] sm:w-[60%] w-[80%] flex flex-col p-5 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] hover:shadow-[0px_4px_4px_5px_rgba(129,72,144,0.561)] overflow-hidden text-center transition hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.02]">
          <img
            src={ExpenseTracker}
            className="w-[100%] flex justify-center items-center rounded-lg"
            alt=""
          />
          <h1 className="text-white text-xl pt-8">Expense Tracker</h1>
          <p className="text-white text-md pt-5">
            A Project Created BY React JS. Expense Tracker can be used to
            tracker expenses by name, by amount and by date
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href="https://github.com/TayyabJunaidOfficial/ExpenseTrackerReactJS"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <FaGithub className="pt-[2px]" />
              Github
            </a>
            <a
              href="https://expense-tracker-by-reactjs.netlify.app/"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <SlActionRedo className="pt-[2px]" />
              Demo
            </a>
          </div>
        </div>
        <div className="h-[100%] lg:w-[30%] md:w-[80%] sm:w-[60%] w-[80%] flex flex-col p-5 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] hover:shadow-[0px_4px_4px_5px_rgba(129,72,144,0.561)] overflow-hidden text-center transition hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.02]">
          <img
            src={Tasckr}
            className="w-[100%] flex justify-center items-center rounded-lg"
            alt=""
          />
          <h1 className="text-white text-xl pt-8">Tasckr</h1>
          <p className="text-white text-md pt-5">
            Tasckr is a Random Single Webpage Like A Fiverr Website Built by
            HTML and CSS
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href="https://github.com/TayyabJunaidOfficial/Tasckr"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <FaGithub className="pt-[2px]" />
              Github
            </a>
            <a
              href="https://tasckr.netlify.app/"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <SlActionRedo className="pt-[2px]" />
              Demo
            </a>
          </div>
        </div>
        <div className="h-[100%] lg:w-[30%] md:w-[80%] sm:w-[60%] w-[80%] flex flex-col p-5 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] hover:shadow-[0px_4px_4px_5px_rgba(129,72,144,0.561)] overflow-hidden text-center transition hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.02]">
          <img
            src={ToDoList}
            className="w-[100%] flex justify-center items-center rounded-lg"
            alt=""
          />
          <h1 className="text-white text-xl pt-8">To Do List</h1>
          <p className="text-white text-md pt-5">
            To Do List build with Tailwind CSS. It is Helpful for add or remove
            of tasks.User can track his Daily Tasks by To Do List.
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href="https://github.com/TayyabJunaidOfficial/To-Do-List-By-Tailwind"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <FaGithub className="pt-[2px]" />
              Github
            </a>
            <a
              href="https://to-do-list-by-tailwind.vercel.app/"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <SlActionRedo className="pt-[2px]" />
              Demo
            </a>
          </div>
        </div>{" "}
        <div className="h-[100%] lg:w-[30%] md:w-[80%] sm:w-[60%] w-[80%] flex flex-col p-5 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] hover:shadow-[0px_4px_4px_5px_rgba(129,72,144,0.561)] overflow-hidden text-center transition hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.02]">
          <img
            src={DentalDummy}
            className="w-[100%] flex justify-center items-center rounded-lg"
            alt=""
          />
          <h1 className="text-white text-xl pt-8">Dental Dummy</h1>
          <p className="text-white text-md pt-5">
            A dummy project of the Dental Specialist with services, advance
            booking and staff and many more stuff
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href="https://github.com/TayyabJunaidOfficial/DentalDummy"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <FaGithub className="pt-[2px]" />
              Github
            </a>
            <a
              href="https://dental-dummy-webpage.netlify.app/"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <SlActionRedo className="pt-[2px]" />
              Demo
            </a>
          </div>
        </div>{" "}
        <div className="h-[100%] lg:w-[30%] md:w-[80%] sm:w-[60%] w-[80%] flex flex-col p-5 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] hover:shadow-[0px_4px_4px_5px_rgba(129,72,144,0.561)] overflow-hidden text-center transition hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.02]">
          <img
            src={Netflix}
            className="w-[100%] flex justify-center items-center rounded-lg"
            alt=""
          />
          <h1 className="text-white text-xl pt-8">NetFlix Pakistan</h1>
          <p className="text-white text-md pt-5">
            Created a Clone Of NetFlix Pakistan Official Web Page To Utilize my
            development Skills
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href="https://github.com/TayyabJunaidOfficial/NetFlix-Pakistan"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <FaGithub className="pt-[2px]" />
              Github
            </a>
            <a
              href="https://neflix-pakistan.vercel.app/"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <SlActionRedo className="pt-[2px]" />
              Demo
            </a>
          </div>
        </div>{" "}
        <div className="h-[100%] lg:w-[30%] md:w-[80%] sm:w-[60%] w-[80%] flex flex-col p-5 border-solid border-2 border-[#c889e6a2] rounded-[5px] shadow-[4px_5px_5px_3px_rgba(89,4,168,0.137)] hover:shadow-[0px_4px_4px_5px_rgba(129,72,144,0.561)] overflow-hidden text-center transition hover:border-3 hover:border-solid hover:border-[#c573e6e1] hover:scale-[1.02]">
          <img
            src={CustomWebsite}
            className="w-[100%] flex justify-center items-center rounded-lg"
            alt=""
          />
          <h1 className="text-white text-xl pt-8">The Custom Websites</h1>
          <p className="text-white text-md pt-5">
            One of the Best websites to provide almost all services of IT Field
            Like Web Dev, Mobile App, Graphic Des. and SEO
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href="https://github.com/TayyabJunaidOfficial/TheCustomWebsites"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <FaGithub className="pt-[2px]" />
              Github
            </a>
            <a
              href="https://the-custom-websites.netlify.app/"
              className="text-white text-md p-2 bg-[rgb(205,95,248)] rounded-md flex gap-1"
            >
              <SlActionRedo className="pt-[2px]" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default All_Projects;
