import {
    useRoutes,
} from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Trainer } from '../../pages/Trainer';
import { FormTrainers } from '../../pages/FormTrainers';
import { NotFound } from '../../pages/NotFound';

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

export { Routes };