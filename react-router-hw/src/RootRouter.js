import React from "react";
import { Route, Link, Switch, Redirect, Router } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MyPage from "./MyPage/MyPage";
import SignUp from "./SignUP/SignUp";

const RootRouter = ({ login }) => {
  return (
    <Router>
      {login ? (
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/mypage" component={MyPage} />
          <Redirect from="*" to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/signup" component={SignUp} />
          <Redirect from="*" to="/login" />
        </Switch>
      )}
    </Router>
  );
};

export default RootRouter;
