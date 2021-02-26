import React from "react";
import { Link } from "react-router-dom";
import { BiBell, BiPurchaseTagAlt } from "react-icons/bi";
import * as S from "./style";
import HamburgerMenu from "../HamburgerMenu";

function Menu() {
  return (
    <div style={{ display: "flex" }}>
      <S.IconContainer>
        <Link to="/alarm">
          <BiBell color="white" />
        </Link>
        <Link to="/basket">
          <BiPurchaseTagAlt color="white" />
        </Link>
        <HamburgerMenu />
      </S.IconContainer>
    </div>
  );
}

export default Menu;
