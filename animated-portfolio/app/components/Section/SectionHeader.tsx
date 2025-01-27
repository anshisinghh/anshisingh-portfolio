import React from 'react'

type Props = {
    highlightText: string;
}

const SectionHeader = ({highlightText}: Props) => {
  return (
    <h2 className="text-[22px] md:text-[35px] text-center whitespace-nowrap highlight font-semibold">
        {highlightText}
    </h2>
  );
};

export default SectionHeader;