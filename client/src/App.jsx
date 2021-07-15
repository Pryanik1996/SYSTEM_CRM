import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignOut from "./components/SignOut/SignOut";
import Main from "./components/Main/Main";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/auth/signinwithgoogle">
          <SignIn />
        </Route>
        {/* <Route exact path="/auth/signin">
        <SignIn/>
      </Route> */}

        <Route exact path="/auth/signout">
          <SignOut />
        </Route>
        {/* <PrivateRoute path="/users">
        <UsersList />
      </PrivateRoute> */}
      </Switch>
    </Router>
  );
}

export default App;
