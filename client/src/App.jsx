import ClientAdd from "./components/ClientAdd/ClientAdd"
import OrderAdd from "./components/OrderAdd/OrderAdd";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import { checkAuth, getUserFromServer } from "./redux/actions/userAction";
import SignOut from "./components/SignOut/SignOut";
import Main from "./components/Main/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    // dispatch(checkAuth());   
    dispatch(getUserFromServer());
  }, []);

  return (
    // <>
    // <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
    // <Router>
    //   <Switch>
    // <Route exact path="/clients/new">   
    //   <ClientAdd />
    // </Route>

    // <Route exact path="/orders/new">
    //   <OrderAdd/>
    // </Route>
    //   </Switch>
    // </Router>
    // </Container>
    // </>

    <Router>
      {state.user && <Header />}
      <React.Fragment>
        <Container component="div" style={{  height: '100vh' }} maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/auth/signout">
              <SignOut />
            </Route>
            <Route exact path="/clients/new">   
      <ClientAdd />
    </Route>
    <Route exact path="/orders/new">
      <OrderAdd/>
    </Route>
          </Switch>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
