import React from 'react'
import Reveal from '../Reveal'

type Props = {
    highlightText: string;
}

const SectionHeader = ({highlightText}: Props) => {
  return (
    <Reveal initialX={-40}>
      <h2 className="text-[22px] md:text-[35px] text-center whitespace-nowrap highlight font-semibold">
          {highlightText}
      </h2>
    </Reveal>
  );
};

export default SectionHeader;