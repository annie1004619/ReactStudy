import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MyPage from "./pages/MyPage/MyPage";
import SignUp from "./pages/SignUP/SignUp";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useUserState } from "./context/UserContext";
import Header from "./component/Header";

const App = () => {
  const { user } = useUserState();

  return (
    <div>
      <Header />
      {user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />}
          <Route path="/signup" component={SignUp} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      )}
    </div>
  );
};

export default App;
