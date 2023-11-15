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
                        Catalogo
                    </Link>
                    <Link to="/trainer" style={{ padding: 5 }}>
                        Detalle entrenador
                    </Link>
                    <Link to="/formTrainers" style={{ padding: 5 }}>
                        Agrega entrenador
                    </Link>
                </nav>

                {/* Outlet: Es la pagina que se va a mostrar */}
                {children}

            </Router>

        </>
    );


}

export { Menu };