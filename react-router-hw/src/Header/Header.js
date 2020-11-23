import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Container>
        <li>
          <Link to="/home">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          <Link to="mypage">마이페이지</Link>
        </li>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;
export default Header;
