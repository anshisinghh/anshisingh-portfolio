"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Reveal from "../Reveal";

type IconProps = {
  name: string;
  skills: string[];
};

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  description: string;
  location: string;
  dates: string;
  icon: IconProps[];
};

const Experience = ({
  id,
  image,
  company,
  location,
  role,
  description,
  dates,
  icon,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);
  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const clientRect = ref.current.getBoundingClientRect();
    xDistance.set(e.x - clientRect.x);
    yDistance.set(e.y - clientRect.y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
              <h3 className="text-xl font-bold">{role}</h3>
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
          <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
            {/* <motion.div
              ref={ref}
              className="absolute inset-0 border-2 border-purple-300 rounded-lg"
              style={{ maskImage: mask, WebkitMaskImage: mask }}
            ></motion.div> */}
            {icon.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon icon={item.skills[0]} width={24} height={24} />
                <p className="text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
