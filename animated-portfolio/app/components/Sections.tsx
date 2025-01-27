import React from 'react'
import About from './About/About'
import Experiences from './Experiences/Experiences'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

const Sections = () => {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
        <About />
        <Experiences />
        <Projects />
        <Skills />
    </main>
  )
}

export default Sections