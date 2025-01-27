import React from "react";
import About from "./About";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact";

const Sections = () => {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Sections;
