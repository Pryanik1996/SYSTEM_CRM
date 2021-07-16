
import ClientAdd from "./components/ClientAdd/ClientAdd"
import Container from '@material-ui/core/Container';
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
    <Route exact path="/admin/workers">   
    <ListOfWorkers />
    </Route>
    <Route exact path="/admin/clients">   
    <ListOfDEletedClients />
    </Route>
    <Route exact path="/admin/items">   
    <ListOfDEletedItems />
    </Route>
    {/* <Route exact path="/admin/worker">   
    <InputForNewWorker/>
    </Route> */}
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
