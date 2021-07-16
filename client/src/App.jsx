import ClientAdd from "./components/ClientAdd/ClientAdd"
import Container from '@material-ui/core/Container';
<<<<<<< HEAD
import ListOfDEletedClients from "./components/ForAdminPage/ListOfDeletedClients/ListOfDeletedClients";
import ListOfDEletedItems from "./components/ForAdminPage/ListOfDeletedItems/ListOfDeletedItems"
import ListOfWorkers from "./components/ForAdminPage/ListOfWorkers/ListOfWorkers";
import AllOrdersList from "./components/AllOrdersList/AllOrdersList";
//yarn add @material-ui/x-grid
// ClientAdd форма для добавления клиента
// ListOfDEletedClients админский список клиентов которые надо удалить
// ListOfDeletedItems админский список заказов которые надо удалить
//ListOfWorkers админский список работников
//yarn add @material-ui/core
//yarn add @material-ui/icons
import InputForNewWorker from "./components/ForAdminPage/InputForNewWorker/InputForNewWorker"

=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderAdd from "./components/OrderAdd/OrderAdd";
>>>>>>> f9fca160774a282aa70e9379c0a5ad16fb29666a

function App() {
  return (
    <>
    <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
<<<<<<< HEAD
    {/* <AllOrdersList/> */}
    <ClientAdd />
    {/* <ListOfWorkers /> */}
    {/* <ListOfDEletedClients /> */}
    {/* <InputForNewWorker/> */}
=======
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
>>>>>>> f9fca160774a282aa70e9379c0a5ad16fb29666a
    </Container>
    </>
  );
}

export default App;
