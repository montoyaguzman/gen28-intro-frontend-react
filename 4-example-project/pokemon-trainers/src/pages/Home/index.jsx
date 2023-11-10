import { Menu } from '../../components/Menu';
import { TrainersList } from '../../components/TrainersList';
import { Card } from '../../components/Card';

import './styles.css';

function Home() {

    const namePage = 'home'

    return (
        <>
            <h1>page {namePage} works!</h1>
            <Menu />
            {/* SearchForm */}
            <TrainersList />
            <Card />
        </>
    );

}

export { Home };