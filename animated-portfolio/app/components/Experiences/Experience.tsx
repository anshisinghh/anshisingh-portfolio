import React from 'react'
import Image from 'next/image'

type Props = {
    id: number,
    image: string,
    company: string,
    role: string,
    description: string,
    dates: string
}

const Experience = ({id, image, company, role, description, dates}: Props) => {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3">
        <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <Image src={image} alt={`Company image for ${company}`} width={18} height={18}></Image>
                <h3 className="text-xl font-medium">{company}</h3>
            </div>
            <div className="text-base md:text-xl font-medium">{role}</div>
        </div>
        <p className="text-sm md:text-base">{description}</p>
        <p className="text-sm.l md:text-base">{dates}</p>
    </div>
  )
}

export default Experience