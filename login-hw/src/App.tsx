import React, { useState } from "react";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";

enum Mode {
  LOGIN = 1,
  MAIN = 2,
}
const App: React.FC = () => {
  const [mode, setMode] = useState(Mode.LOGIN);
  const [id, setId] = useState("");

  const onLogIn = (userId: string) => {
    alert(`${userId} 님 환영합니다`);
    setMode(Mode.MAIN);
    setId(userId);
  };

  const onLogOut = () => {
    alert("로그아웃 합니다.");
    setMode(Mode.LOGIN);
  };

  if (mode === Mode.MAIN) return <MainPage id={id} onLogOut={onLogOut} />;

  return <LoginPage onLogIn={onLogIn} />;
};

export default App;
