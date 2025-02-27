import React from "react";
import skills from "@/data/skills.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Skill from "./Skill";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <div className="section-contents mb-[66px] md:mb-[43px] mx-[22px] md:mx-[116px]">
        <SectionHeader highlightText="Skills"></SectionHeader>
        <div className="card w-full px-[33px] py-[27px] flex flex-wrap justify-center items-center gap-[20px]">
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
