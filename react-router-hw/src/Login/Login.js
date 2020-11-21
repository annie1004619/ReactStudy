import React, { useCallback, useState } from "react";
import {
  MyDiv,
  MyH1,
  MyUl,
  MyLi,
  InputDiv,
  MyInput,
  MyLabel,
  SubmitInput,
} from "./LoginStyle";

const Login = ({ onLogIn }) => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onChangeId = useCallback((e) => {
    const blank = /\s/;
    if (blank.test(e.currentTarget.value) === true) {
      alert("공백은 사용할 수 없습니다.");
      return;
    }
    setId(e.currentTarget.value);
  }, []);

  const onChangePwd = useCallback((e) => {
    setPwd(e.currentTarget.value);
  }, []);

  const onSubmit = () => {
    if (id === "") {
      alert("아이디를 입력해주세요");
    } else if (pwd === "") {
      alert("비밀번호를 입력해주세요");
    } else if (pwd === "1234") {
      onLogIn(id);
    } else if (pwd !== "1234") {
      alert("비밀번호가 틀렸습니다.");
    }
  };

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
};

export default Login;
