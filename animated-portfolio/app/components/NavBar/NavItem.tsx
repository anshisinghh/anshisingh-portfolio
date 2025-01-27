import React from "react";
import cn from "classnames";

type NavItemProps = {
  sectionID: string;
  label: string;
  activeSection: string;
  setActiveSection: (sectionID: string) => void;
  scrollToSection: (sectionID: string) => void;
  closeMenu: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ sectionID, label, activeSection, setActiveSection, scrollToSection, closeMenu }) => {
  return (
    <li className="cursor-pointer">
      <div
        className={cn(
          "rounded p-1 duration-300 ease-in-out",
          { "bg-primary text-white": activeSection === sectionID },
          { "whitespace-nowrap": label === "Contact Me" }
        )}
        onClick={() => {
          setActiveSection(sectionID);
          scrollToSection(sectionID);
          closeMenu();
        }}
      >
        {label}
      </div>
    </li>
  );
};

export default NavItem;
