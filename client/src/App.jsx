import React from "react";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Header from "./components/Header/Header";
import GoogleButton from "react-google-button";
// import SignInGoogle from "./components/SignInGoogle/SignInGoogle";
import SignOut from "./components/SignOut/SignOut";
import { LoginSuccess } from "./components/LoginSuccess/LoginSuccess";
import Main from "./components/Main/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setAuthUser, setIsAuthenticated } from "./app/appSlice";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/auth/user")
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('USER', user);
  // const user = useSelector((state: any) => state.app.authUser as any) as any;
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const fetchAuthUser = async () => {
  //   const response = await axios
  //     .get("http://localhost:3001/auth/signinwithgoogle", {
  //       withCredentials: true,
  //     })
  //     .catch((err) => {
  //       console.log("Not properly authenticated");
  //       dispatch(setIsAuthenticated(false));
  //       dispatch(setAuthUser(null));
  //       history.push("/auth/signin/error");
  //     });

  //   if (response && response.data) {
  //     console.log("User: ", response.data);
  //     dispatch(setIsAuthenticated(true));
  //     dispatch(setAuthUser(response.data));
  //     history.push("/welcome");
  //   }
  // };

  // const redirectToGoogleSSO = async () => {
  //   // let timer: NodeJS.Timeout | null = null;
  //   let timer;
  //   const googleLoginURL = "http://localhost:3001/auth/signinwithgoogle";
  //   const newWindow = window.open(
  //     googleLoginURL,
  //     "_blank",
  //     "width=500,height=600"
  //   );

  //   if (newWindow) {
  //     timer = setInterval(() => {
  //       if (newWindow.closed) {
  //         console.log("Yay we're authenticated");
  //         fetchAuthUser();
  //         if (timer) clearInterval(timer);
  //       }
  //     }, 500);
  //   }
  // };

  return (
    <Router>
      <Header />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/auth/signin">
                <GoogleButton
                  onClick={() =>
                    window.open("http://localhost:3001/auth/signinwithgoogle")
                  }
                />
              </Route>

              {/* <Route exact path="/auth/signinwithgoogle">
                <SignInGoogle />
              </Route> */}

              <Route exact path="/auth/signout">
                <SignOut />
              </Route>
            </Switch>
          </Typography>
        </Container>
      </React.Fragment>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Header />

//       <Switch>
//         <Route exact path="/">
//           <Main />
//         </Route>
//         <Route exact path="/auth/signinwithgoogle">
//           <SignIn />
//         </Route>
//         {/* <Route exact path="/auth/signin">
//         <SignIn/>
//       </Route> */}

//         <Route exact path="/auth/signout">
//           <SignOut />
//         </Route>
//         {/* <PrivateRoute path="/users">
//         <UsersList />
//       </PrivateRoute> */}
//       </Switch>
//     </Router>
//   );
// }

export default App;
