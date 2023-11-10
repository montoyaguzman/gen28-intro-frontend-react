import './App.css';
import {
  BrowserRouter as Router,
  useRoutes,
  Link,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Trainer } from './pages/Trainer';
import { FormTrainers } from './pages/FormTrainers';
import { NotFound } from './pages/NotFound';

function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "trainer",
      element: <Trainer />
    },
    {
      path: "formTrainers",
      element: <FormTrainers />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);
  return routes;
}

function App() {

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
        <Routes />
      </Router>

    </>
  )
}

export default App
