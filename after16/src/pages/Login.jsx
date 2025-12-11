import { Helmet } from "react-helmet";

function Login(){
    return(
        <>
            <Helmet>
                <title>Login Dexter</title>
                <meta name="description" content="Acceso al sistema de productos"></meta>
            </Helmet>

            <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Email" /><br /><br />
                    <input type="password" placeholder="Password" /><br /><br />
                    <button>Ingresar</button>
                </form>
        </>
    );
}


export default Login;
