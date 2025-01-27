import React from 'react'
import experiences from "@/data/experiences.json";
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import Experience from './Experience';
import Image from 'next/image';

const Experiences = () => {
  return (
    <SectionContainer id="experience">
        <div className="section-contents md:mx-[64px]">
            <SectionHeader highlightText='Work Experience'></SectionHeader>
            <div className="w-full px-6 md:px-[52px] flex flex-col gap-5">
                {experiences.map((experience, id) => (
                    <Experience 
                        key={id} 
                        id={id}
                        image={experience.image} 
                        company={experience.company} 
                        role={experience.role} 
                        description={experience.description} 
                        dates={experience.dates} 
                    />))}
            </div>
        </div>
    </SectionContainer>
  )
}

export default Experiences