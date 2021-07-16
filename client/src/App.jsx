import ClientAdd from "./components/ClientAdd/ClientAdd"
import Container from '@material-ui/core/Container';
<<<<<<< HEAD
import AllClients from './components/AllClients/AllClients'
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderAdd from "./components/OrderAdd/OrderAdd";
>>>>>>> origin/test

function App() {
  return (
    <>
<<<<<<< HEAD
    {/* <CssBaseline />
    <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
    <ClientAdd />
    </Container> */}
    <AllClients />
  </>
=======
    <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
    <Router>
      <Switch>
    <Route exact path="/clients/new">   
      <ClientAdd />
    </Route>

    <Route exact path="/orders/new">
      <OrderAdd/>
    </Route>
      </Switch>
    </Router>
    </Container>
    </>
>>>>>>> origin/test
  );
}

export default App;
