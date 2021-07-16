import ClientAdd from "./components/ClientAdd/ClientAdd"
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderAdd from "./components/OrderAdd/OrderAdd";

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
      </Switch>
    </Router>
    </Container>
    </>
  );
}

export default App;
