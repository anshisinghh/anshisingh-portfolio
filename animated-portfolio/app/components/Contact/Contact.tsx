import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="font-semibold text-[22px] md:text-[40px] md:max-w-[462px]">Get in Touch</h2>
        <div className="highlight text-xl">Irvine, CA | anshisingh730@gmail.com | (949) 353-4274</div>
        <SocialLinks />
      </div>
      <small>Copyright &copy; Anshi Singh 2025</small>
    </section>
  );
};

export default Contact;
