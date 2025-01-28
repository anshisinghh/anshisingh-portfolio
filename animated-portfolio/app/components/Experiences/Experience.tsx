import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "../Reveal";

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  url?: string;
  description: string;
  location: string;
  dates: string;
  languageIcons: string[];
};

const Experience = ({
  id,
  image,
  company,
  location,
  role,
  url,
  description,
  dates,
  languageIcons = [],
}: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={id * 0.5}>
      <div className="relative flex items-start">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center z-10">
            <Image
              src={image}
              alt={`Company image for ${company}`}
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-4 ml-6">
          <div className="gap-2">
            <div className="flex justify-between items-center">
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <h3 className="text-xl font-bold">{role}</h3>
                  <img
                    src="link_arrow_dark.svg"
                    alt="Link arrow"
                    className="inline-block w-4 h-4"
                  />
                </a>
              ) : (
                <h3 className="text-xl font-bold">{role}</h3>
              )}
              <p className="text-sm md:text-base text-gray-500">{dates}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm md:text-base text-gray-500 font-semibold">
                {company}
              </p>
              <p className="text-sm md:text-base text-gray-500">{location}</p>
            </div>
          </div>
          <p className="text-sm md:text-base">{description}</p>
          {languageIcons.length > 0 && (
            <div className="flex flex-row gap-[11px]">
              {languageIcons.map((icon, iconId) => (
                <Icon icon={icon} key={iconId} width={24} height={24} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
