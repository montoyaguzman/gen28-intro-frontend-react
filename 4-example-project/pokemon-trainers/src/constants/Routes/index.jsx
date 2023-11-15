import {
    useRoutes,
} from 'react-router-dom';

import { Home } from '../../pages/Home';
import { FormTrainers } from '../../pages/FormTrainers';
import { About } from '../../pages/About';
import { Trainer } from '../../pages/Trainer';
import { NotFound } from '../../pages/NotFound';

function Routes() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "new-trainer",
            element: <FormTrainers />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "detail-trainer",
            element: <Trainer />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);
    return routes;
}

export { Routes };