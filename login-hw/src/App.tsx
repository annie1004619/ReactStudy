import React, { useState } from "react";
import Login from "./Login";
import LoginPage from "./loginPage";
import MainPage from "./mainPage";
//import LoginWithInputs from "./LoginWithInputs";

function App(props: any): any {
  const [mode, setMode] = useState("LOGIN");
  const [data, setData] = useState("");

  if (mode === "LOGIN")
    return <LoginPage setMode={setMode} setData={setData} />;
  else if (mode === "MAIN") return <MainPage setMode={setMode} props={data} />;
}

export default App;
