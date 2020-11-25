import React from "react";
import styled from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import MyPage from "./pages/MyPage/MyPage";
import SignUp from "./pages/SignUP/SignUp";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useUserState } from "./context/UserContext";
import Header from "./component/Header";
import Modify from "./pages/MyPage/Modify";

const App = () => {
  const { user } = useUserState();

  return (
    <Container>
      <Header />
      {user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mypage" component={MyPage} />
          <Route path="/mypage/modify" component={Modify} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />}
          <Route path="/signup" component={SignUp} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/" />
        </Switch>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 2vh 6vh;
`;
export default App;
