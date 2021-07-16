import ClientAdd from "./components/ClientAdd/ClientAdd"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ListOfDEletedClients from "./components/ForAdminPage/ListOfDeletedClients/ListOfDeletedClients";
import ListOfDEletedItems from "./components/ForAdminPage/ListOfDeletedItems/ListOfDeletedItems"
import ListOfWorkers from "./components/ForAdminPage/ListOfWorkers/ListOfWorkers";
// ClientAdd форма для добавления клиента
// ListOfDEletedClients админский список клиентов которые надо удалить
// ListOfDeletedItems админский список заказов которые надо удалить
//ListOfWorkers админский список работников
//yarn add @material-ui/core
//yarn add @material-ui/icons

function App() {
  return (
    <>
    <CssBaseline />
    <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
    {/* <ClientAdd /> */}
    {/* <ListOfWorkers /> */}
    <ListOfDEletedClients />
    </Container>
  </>
  );
}

export default App;
