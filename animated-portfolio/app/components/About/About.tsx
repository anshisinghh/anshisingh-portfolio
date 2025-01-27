import React from 'react';
import Image from 'next/image';
import SocialLinks from '../SocialLinks/SocialLinks';

const About = () => {
  return (
    <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:mr-[35px] md:items-start">
        <h1 className="text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline">
          Hi! I'm Anshi Singh{" "}
          <span className="block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0">Software Engineer</span>
        </h1>
        <p className="text-center mx-6 md:text-[20px] md:text-start md:mx-0">
          I am a 4th year at UC San Diego, I will be graduating with a degree in Computer Science.
        </p>
        <SocialLinks />
      </div>
      <div>
        <Image
          src="/profile_light_purple.png"
          alt="Light purple rectangle"
          width={340}
          height={430}
          className="hidden md:block w-[340px] h-[430px] absolute right-0 -z-10"
        />
        <Image
          src="/profile_dark_purple.png"
          alt="Dark purple rectangle"
          width={340}
          height={430}
          className="hidden md:block w-[340px] h-[430px] absolute right-0 -z-10"
        />
        <Image
          src="/profile_picture.jpg"
          alt="Anshi Singh profile picture"
          width={313}
          height={417}
          className="hidden md:block min-w-[313px] h-[417px] z-10 mr-[7.7px] my-[6.5px] rounded-[3%]"
        />
      </div>
    </section>
  );
};

export default About;
