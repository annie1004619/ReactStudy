import React from "react";
import * as S from "./style";
import Logo from "./logo";
import Menu from "./menu";

function Header() {
  return (
    <S.Container>
      <S.HeaderContents>
        <Logo />
        <Menu />
      </S.HeaderContents>
    </S.Container>
  );
}

export default Header;
