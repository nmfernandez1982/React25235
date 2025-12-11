import { Helmet } from "react-helmet";


function Home(){
    return(
        <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="Pagina de productos Deportivos"></meta>
            <meta name="keywords" content="hierros, maquinas de soldar, perfiles, rejas"></meta>
        </Helmet>

        <h1>Pagina de inicio Dexter</h1>
        <p>Bienvenidos!!!!</p>
        
        </>
    );
}

export default Home;