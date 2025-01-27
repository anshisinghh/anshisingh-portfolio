import React from "react";
import Image from "next/image";
import Reveal from "../Reveal";

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  description: string;
  dates: string;
};

const Experience = ({ id, image, company, role, description, dates }: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={id * 0.5}>
      <div className="relative flex items-start">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
            <Image
              src={image}
              alt={`Company image for ${company}`}
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <div className="flex-1 w-[2px] bg-gray-300 min-h-[50px]"></div>
        </div>
        <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3 ml-6">
          <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <h3 className="text-xl font-medium">{company}</h3>
            </div>
            <div className="text-base md:text-xl font-medium">{role}</div>
          </div>
          <p className="text-sm md:text-base">{description}</p>
          <p className="text-sm.l md:text-base">{dates}</p>
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
