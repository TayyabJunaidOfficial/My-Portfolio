import React from "react";
import Description from "./Project Components/Description";
import All_Projects from "./Project Components/All_Projects";
import Footer from "./Home Components/Footer";
function Projects() {
  return (
    <div className="App">
      <Description />
      <All_Projects />
      <Footer />
    </div>
  );
}

export default Projects;
