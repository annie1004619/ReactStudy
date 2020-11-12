import React, { useState } from "react";
import styled from "styled-components";

const Login: any = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [mode, setMode] = useState("LOGIN");

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const onChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.currentTarget.value);
  };

  const onSubmit = () => {
    if (id === "") {
      alert("아이디를 입력해주세요");
    } else if (pwd === "") {
      alert("비밀번호를 입력해주세요");
    } else if (pwd === "1234") {
      alert(`${id} 님 환영합니다`);
      setMode("MAIN");
    } else if (pwd !== "1234") {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  if (mode === "LOGIN") {
    return (
      <MyDiv>
        <MyH1>PurpleCode</MyH1>
        <form>
          <MyUl>
            <MyLi>
              <MyLabel htmlFor="user_id">아이디:</MyLabel>
              <InputDiv>
                <MyInput
                  id="user_id"
                  value={id}
                  onChange={onChangeId}
                  placeholder="아이디를 입력해주세요"
                  required
                />
                <hr />
              </InputDiv>
            </MyLi>
            <MyLi>
              <MyLabel htmlFor="user_pwd">비밀번호:</MyLabel>
              <InputDiv>
                <MyInput
                  id="user_pwd"
                  value={pwd}
                  onChange={onChangePwd}
                  placeholder="비밀번호를 입력해주세요"
                  required
                />
                <hr />
              </InputDiv>
            </MyLi>
          </MyUl>
          <SubmitInput type="submit" value="로그인" onClick={onSubmit} />
        </form>
      </MyDiv>
    );
  } else if (mode === "MAIN") {
    const onclick = () => {
      alert("로그아웃 합니다.");
      setMode("LOGIN");
      setId("");
      setPwd("");
    };

    return (
      <div>
        <MainUl>
          <LogoLi>PurpleCode</LogoLi>
          <NavDiv>
            <MainLi>{id}님</MainLi>
            <MainLi>
              <SubmitInput type="submit" value="로그아웃" onClick={onclick} />
            </MainLi>
          </NavDiv>
        </MainUl>
        <MainP>{id}님 환영합니다.</MainP>
      </div>
    );
  }
};

const MyDiv = styled.div`
  padding: 0px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MyH1 = styled.h1`
  color: purple;
  font-size: 6vw;
  padding: 0px;
`;
const MyUl = styled.ul`
  list-style: none;
  padding: 0px;
`;
const MyLi = styled.li`
  width: 28vw;
  display: flex;
  align-items: center;
  font-size: 1.6vw;
   margin 0 auto;
`;
const InputDiv = styled.div`
  width: 17vw;
`;
const MyInput = styled.input`
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    color: gray;
    font-size: 1vw;
  }
`;

const MyLabel = styled.label`
  margin-right: 1vw;
  height: 5vh;
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
export default Login;
