import React from "react";
import { MainUl, LogoLi, NavDiv, MainLi, SubmitInput } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { useUserDispatch, useUserState } from "../context/UserContext";

const Header = () => {
  const { user } = useUserState();
  const dispatch = useUserDispatch();

  console.log(user);

  const onLogOut = () => {
    alert("로그아웃 되었습니다.");
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <MainUl>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoLi>PurpleCode</LogoLi>
      </Link>
      {user ? (
        <NavDiv>
          <MainLi>{user.userId}님</MainLi>
          <MainLi>
            <Link to="/mypage">
              <SubmitInput type="submit" value="마이 페이지" />
            </Link>
          </MainLi>
          <MainLi>
            <SubmitInput type="submit" value="로그아웃" onClick={onLogOut} />
          </MainLi>
        </NavDiv>
      ) : (
        <NavDiv>
          <MainLi>
            <Link to="/login">
              <SubmitInput type="submit" value="로그인" />
            </Link>
          </MainLi>
        </NavDiv>
      )}
    </MainUl>
  );
};

export default Header;
