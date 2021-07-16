import ClientAdd from "./components/ClientAdd/ClientAdd"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AllClients from './components/AllClients/AllClients'

function App() {
  return (
    <>
    {/* <CssBaseline />
    <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
    <ClientAdd />
    </Container> */}
    <AllClients />
  </>
  );
}

export default App;
