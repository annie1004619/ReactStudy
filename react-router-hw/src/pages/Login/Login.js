import React, { useCallback } from "react";
import useInput from "../../hooks/useInput";
import {
  Container,
  Title,
  InputContainer,
  InputItem,
  InputDiv,
  MyInput,
  InputLabel,
  LoginBtn,
} from "./LoginStyle";
import { useUserDispatch, useUserState } from "../../context/UserContext";

const Login = ({ history }) => {
  const [id, onChangeId, setId] = useInput("");
  const [pwd, onChangePwd, setPwd] = useInput("");

  const { userList } = useUserState();
  const dispatch = useUserDispatch();

  const onReset = useCallback(() => {
    setId("");
    setPwd("");
  }, [setId, setPwd]);

  const onLogin = () => {
    if (!id || !pwd) {
      alert("모든 값을 정확하게 입력해주세요");
      return;
    }

    const findUser = userList.find((user) => user.id === id);

    if (!findUser) {
      alert("없는 아이디입니다. 회원가입을 해주세요");
      history.push("/signup");
      return;
    } else if (findUser.pwd !== pwd) {
      alert("비밀번호가 틀렸습니다.");
      return;
    }

    dispatch({
      type: "LOGIN",
      userId: id,
      userPwd: pwd,
    });

    onReset();
  };

  return (
    <Container>
      <Title>PurpleCode</Title>
      <form>
        <InputContainer>
          <InputItem>
            <InputLabel htmlFor="user_id">아이디:</InputLabel>
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
          </InputItem>
          <InputItem>
            <InputLabel htmlFor="user_pwd">비밀번호:</InputLabel>
            <InputDiv>
              <MyInput
                id="user_pwd"
                type="password"
                value={pwd}
                onChange={onChangePwd}
                placeholder="비밀번호를 입력해주세요"
                required
              />
              <hr />
            </InputDiv>
          </InputItem>
        </InputContainer>
      </form>
      <LoginBtn type="submit" value="로그인" onClick={onLogin} />
    </Container>
  );
};

export default Login;
