import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="font-semibold text-[22px] md:text-[40px] md:max-w-[462px]">Get in Touch</h2>
        <div className="highlight">Irvine, CA | anshisingh730@gmail.com | (949) 353-4274</div>
        <div className="flex flex-row gap-5 mt-4">
        <a href="https://github.com/anshisinghh" title="Github" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-white">
            <FaGithub />
        </a>
        <a href="mailto:anshisingh730@gmail.com" title="Email" className="text-xl md:text-2xl text-white">
            <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/anshisingh" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-white">
            <FaLinkedin />
        </a>
        <a href="/Anshi_Singh_Resume.pdf" title="Resume" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-white">
            <FaFilePdf />
        </a>
        </div>
      </div>
      <small>Copyright &copy; Anshi Singh 2025</small>
    </section>
  );
};

export default Contact;
