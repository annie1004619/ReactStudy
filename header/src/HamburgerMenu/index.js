import React, { useState } from "react";
import styled from "styled-components";
import MenuToggle from "./menuToggle";
import { motion } from "framer-motion";
import Menulist from "./menulist";

const HamburgerMenuContainer = styled.div`
  display: flex;
`;
// eslint-disable-next-line
const HamburgerIcon = styled.div`
  color: ${({ reverseColor }) => (reverseColor ? "#000" : "#fff")};
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;
const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 45%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};
function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <Menulist />
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}

export default HamburgerMenu;
