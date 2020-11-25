import React from "react";
import { MainUl, LogoLi, NavDiv, MainLi, SubmitInput } from "./HeaderStyle";
import { Link, withRouter } from "react-router-dom";
import { useUserDispatch, useUserState } from "../context/UserContext";

const Header = ({ location }) => {
  const { user } = useUserState();
  const dispatch = useUserDispatch();

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
          {location.pathname !== "/mypage" && (
            <MainLi>
              <Link to="/mypage">
                <SubmitInput type="submit" value="마이 페이지" />
              </Link>
            </MainLi>
          )}
          <MainLi>
            <Link to="/">
              <SubmitInput type="submit" value="로그아웃" onClick={onLogOut} />
            </Link>
          </MainLi>
        </NavDiv>
      ) : location.pathname === "/signup" ? (
        <NavDiv>
          <MainLi>
            <Link to="/">
              <SubmitInput type="submit" value="로그인" />
            </Link>
          </MainLi>
        </NavDiv>
      ) : (
        <NavDiv>
          <MainLi>
            <Link to="/signup">
              <SubmitInput type="submit" value="회원가입" />
            </Link>
          </MainLi>
        </NavDiv>
      )}
    </MainUl>
  );
};

export default withRouter(Header);
