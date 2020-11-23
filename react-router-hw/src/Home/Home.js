import React from "react";

import {
  MainLi,
  SubmitInput,
  LogoLi,
  MainP,
  MainUl,
  NavDiv,
} from "./HomeStyle";

const Home = ({ id, onLogOut }) => {
  return (
    <div>
      <MainUl>
        <LogoLi>PurpleCode</LogoLi>
        <NavDiv>
          <MainLi>{id}님</MainLi>
          <MainLi>
            <SubmitInput type="submit" value="로그아웃" onClick={onLogOut} />
          </MainLi>
        </NavDiv>
      </MainUl>
      <MainP>{id}님 환영합니다.</MainP>
    </div>
  );
};

export default Home;
