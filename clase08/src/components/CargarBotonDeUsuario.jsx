import { useContext } from 'react';
import {Card,Spinner,Button} from 'react-bootstrap'
import {UserContext} from '../context/UserContext'

const CargarBotonDeUsuario=()=>{

        const {fetchRandomUser}=useContext(UserContext);

        return(
                <div>
                    <Button variant='primary' onClick={fetchRandomUser} >
                        Cargar Nuevo Usuario
                    </Button>
                </div>
        );
};


export default CargarBotonDeUsuario;
