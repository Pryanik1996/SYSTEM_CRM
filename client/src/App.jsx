import ClientAdd from "./components/ClientAdd/ClientAdd"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <>
    <CssBaseline />
    <Container component="div" style={{  height: '100vh' }} maxWidth="sm">
    <ClientAdd />
    </Container>
  </>
  );
}

export default App;
