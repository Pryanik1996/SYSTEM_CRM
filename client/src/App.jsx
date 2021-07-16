import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientAdd from "./components/ClientAdd/ClientAdd"
import OrderAdd from "./components/OrderAdd/OrderAdd";
import ClientInfo from "./components/ClientInfo/ClientInfo"

function App() {
  return (
    <>
    <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
    <Router>
      <Switch>
    <Route exact path="/clients/new">   
      <ClientAdd />
    </Route>

    <Route exact path="/orders/new">
      <OrderAdd/>
    </Route>

    <Route exact path="/clients">
      <ClientInfo />
    </Route>

      </Switch>
    </Router>
    </Container>
    </>
  );
}

export default App;
