import React from 'react'

type Props = {
    plainText: string;
    highlightText: string;
}

const SectionHeader = ({plainText, highlightText}: Props) => {
  return (
    <h2 className="text-[22px] md:text-[35px] px-20 text-center">
        {plainText}{" "}
        <span className="px-2 whitespace-nowrap highlight">{highlightText}</span>
    </h2>
  );
};

export default SectionHeader;