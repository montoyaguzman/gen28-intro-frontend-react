import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import './styles.css';

import logo from '../../assets/img/logo.png';

function Menu({ children }) {
    // const children = props.children
    return (
        <>
            <Router>
                <nav style={{ margin: 10 }}>
                    <div>
                        <img src={logo} alt="logo de trainers" className='logo-img' />
                    </div>
                    <ul className='nav-items'>
                        <Link to="/" className='nav-link'>
                            Inicio
                        </Link>
                        <Link to="/new-trainer" className='nav-link'>
                            Crear un nuevo entrenador
                        </Link>
                        <Link to="/about" className='nav-link'>
                            Acerca de nosotros
                        </Link>
                    </ul>
                </nav>

                {/* Outlet: Es la pagina que se va a mostrar */}
                {children}

            </Router>

        </>
    );


}

export { Menu };