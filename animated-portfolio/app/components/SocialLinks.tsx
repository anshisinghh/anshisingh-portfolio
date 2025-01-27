import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 mt-4 ${className}`}>
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
  );
};

export default SocialLinks;
