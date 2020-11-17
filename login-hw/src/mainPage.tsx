import React, { useState } from "react";
import styled from "styled-components";

const MainPage: any = (props: any) => {
  const onclick = () => {
    alert("로그아웃 합니다.");

    props.setMode("LOGIN");
  };

  return (
    <div>
      <MainUl>
        <LogoLi>PurpleCode</LogoLi>
        <NavDiv>
          <MainLi>{props.props}님</MainLi>
          <MainLi>
            <SubmitInput type="submit" value="로그아웃" onClick={onclick} />
          </MainLi>
        </NavDiv>
      </MainUl>
      <MainP>{props.props}님 환영합니다.</MainP>
    </div>
  );
};

const MainUl = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const NavDiv = styled.div`
  display: flex;
`;
const LogoLi = styled.li`
  color: purple;
  font-weight: bold;
  font-size: 3vw;
`;
const MainLi = styled.li`
  margin: 0vw 1vw;
`;

const MainP = styled.p`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitInput = styled.input`
  background-color: purple;
  border: none;
  color: white;
  width: 10vw;
  height: 5vh;
  text-decoration: none;
  text-align: center;
  font-size: 1vw;
`;

export default MainPage;
