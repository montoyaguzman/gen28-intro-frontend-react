import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import './styles.css';

function Menu({ children }) {
    // const children = props.children
    return (
        <>
            <Router>
                <nav style={{ margin: 10 }}>
                    <Link to="/" style={{ padding: 5 }}>
                        Inicio
                    </Link>
                    <Link to="/new-trainer" style={{ padding: 5 }}>
                        Crear un nuevo entrenador
                    </Link>
                    <Link to="/about" style={{ padding: 5 }}>
                        Acerca de nosotros
                    </Link>
                </nav>

                {/* Outlet: Es la pagina que se va a mostrar */}
                {children}

            </Router>

        </>
    );


}

export { Menu };