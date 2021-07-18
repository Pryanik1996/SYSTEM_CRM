import ClientAdd from "./components/ClientAdd/ClientAdd";
import OrderAdd from "./components/OrderAdd/OrderAdd";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import ListOfDEletedClients from "./components/ForAdminPage/ListOfDeletedClients/ListOfDeletedClients";
import ListOfDEletedItems from "./components/ForAdminPage/ListOfDeletedItems/ListOfDeletedItems";
import ListOfWorkers from "./components/ForAdminPage/ListOfWorkers/ListOfWorkers";
import CardsClients from "./components/CardsClients/CardsClients"
import AllOrdersList from "./components/AllOrdersList/AllOrdersList";
//yarn add @material-ui/x-grid
// ClientAdd форма для добавления клиента
// ListOfDEletedClients админский список клиентов которые надо удалить
// ListOfDeletedItems админский список заказов которые надо удалить
//ListOfWorkers админский список работников
//yarn add @material-ui/core
//yarn add @material-ui/icons
import InputForNewWorker from "./components/ForAdminPage/InputForNewWorker/InputForNewWorker";

import Header from "./components/Header/Header";
import { checkAuth, getUserFromServer } from "./redux/actions/userAction";
import SignOut from "./components/SignOut/SignOut";
import Main from "./components/Main/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import AllClients from "./components/AllClients/AllClients";



function App() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log("history===>", history);

  useEffect(() => {
    // dispatch(checkAuth());
    dispatch(getUserFromServer());
  }, []);

  return (
    <Router>
      {state.user && <Header />}
      <React.Fragment>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/auth/signout">
              <SignOut />
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
            <Route exact path="/clients/new">
              <ClientAdd />
            </Route>
            <Route exact path="/orders/new">
              <OrderAdd />
            </Route>
            <Route exact path="/clients">
              <AllClients />
            </Route>
            <Route exact path="/clients/:id">
            <CardsClients />
            </Route>
            
          </Switch>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
