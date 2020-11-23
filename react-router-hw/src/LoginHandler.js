import React, { useCallback, useState } from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { withRouter } from "react-router-dom";

const LoginHandler = ({ mode, onSetMode, history }) => {
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

  const onLogIn = (userId) => {
    alert(`${userId} 님 환영합니다`);
    onSetMode(true);
  };

  const onLogOut = () => {
    alert("로그아웃 합니다.");
    onSetMode(false);
    history.push("/");
  };

  return (
    <>
      {mode ? (
        <Home id={id} onLogOut={onLogOut} />
      ) : (
        <Login
          pwd={pwd}
          id={id}
          onLogIn={onLogIn}
          onChangeId={onChangeId}
          onChangePwd={onChangePwd}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default withRouter(LoginHandler);
