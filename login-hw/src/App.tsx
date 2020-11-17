import React, { useState } from "react";
import LoginPage from "./loginPage";
import MainPage from "./mainPage";
//import LoginWithInputs from "./LoginWithInputs";

function App(props: any): JSX.Element {
  const [mode, setMode] = useState("LOGIN");
  const [data, setData] = useState("");

  if (mode === "MAIN") return <MainPage setMode={setMode} props={data} />;

  return <LoginPage setMode={setMode} setData={setData} />;
}

export default App;
