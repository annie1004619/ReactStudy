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

const Login = ({ id, pwd, onChangeId, onChangePwd, onSubmit }) => {
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
