import {Container} from 'react-bootstrap';
import { UserProvider } from './context/UserContext';
import UserCard from './components/UserCard';
import CargarBotonDeUsuario from './components/CargarBotonDeUsuario';


function App() {

  return (
    <UserProvider>
        <Container>
          <h1>Usuarios Random</h1>
          <UserCard />
          <CargarBotonDeUsuario/>
        </Container>
    </UserProvider>
  )
}

export default App
