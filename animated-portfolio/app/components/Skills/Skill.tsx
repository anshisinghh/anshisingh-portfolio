import React from 'react';
import { Icon } from '@iconify/react';

type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
      <Icon icon={icon} width={24} height={24} />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;
