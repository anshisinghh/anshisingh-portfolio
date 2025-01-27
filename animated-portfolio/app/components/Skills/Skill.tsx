import React from 'react'

type Props = {
    icon: string;
    name: string;
}

const Skill = ({icon, name}: Props) => {
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
        <img src={icon} alt={`${name} icon`}></img>
        <p className="text-lg">{name}</p>
    </div>
  )
}

export default Skill