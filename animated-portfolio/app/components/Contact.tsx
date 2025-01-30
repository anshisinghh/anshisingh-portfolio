"use client";

import React, { useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";
import { motion, useMotionValue } from "framer-motion";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

  const updatePos = (e: MouseEvent) => {
    if (!ref.current) return;

    const { top, left } = ref.current.getBoundingClientRect();

    posX.set(e.x - left);
    posY.set(e.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePos);

    return () => {
      window.removeEventListener("mousemove", updatePos);
    };
  });

  return (
    <Reveal initialY={40} delay={0.5}>
      <section
        ref={ref}
        id="contact"
        className="relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px] group"
      >
        <div className="flex flex-col gap-5 items-center">
          <h2 className="font-semibold text-[22px] md:text-[40px] md:max-w-[462px]">
            Contact Me
          </h2>
          <div className="flex flex-col md:flex-row items-center highlight font-semibold text-[22px] md:text-xl gap-x-2">
            <p>Irvine, CA |</p>
            <a
              href="mailto:anshisingh730@gmail.com"
              className="hover:underline"
            >
              anshisingh730@gmail.com |
            </a>
            <a href="tel:+19493534274" className="hover:underline">
              (949) 353-4274
            </a>
          </div>
          <SocialLinks />
        </div>
        <small>Copyright &copy; Anshi Singh 2025</small>
        <motion.div
          className="absolute w-64 h-64 bg-gradient-radial from-violet-700/100 to-transparent rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{ left: posX, top: posY, transform: "translate (-50%, -50%" }}
        ></motion.div>
      </section>
    </Reveal>
  );
};

export default Contact;
