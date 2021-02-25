import React, { useState } from "react";
import UserList from "./UserList";
//import SignUp from "./SignUp";
//import Counter from "./Counter";
//import Hello from "./Hello";
import CustomPassword from "./CustomPassword";

function App() {
  const [toggle, setToggle] = useState(true);
  const ToggleModeChange = () => setToggle((prev) => !prev);

  return (
    <CustomPassword />
    // <Hello name="김지원" color="red" />
    //  <Counter />
    // <SignUp />
    /* <div>
     <button onClick={ToggleModeChange}>toggle</button>
     {toggle ? <UserList/> : <div>UserList가 없습니다 </div>}
   </div>*/
  );
}

export default App;
