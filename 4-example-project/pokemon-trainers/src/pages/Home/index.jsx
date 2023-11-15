import { SearchForm } from '../../components/SearchForm';
import { TrainersList } from '../../components/TrainersList';
import { Card } from '../../components/Card';

import './styles.css';

function Home() {

    const namePage = 'home'

    return (
        <>
            <div className='container-home'>
                <h1>page {namePage} works!</h1>
                <SearchForm />
                <TrainersList />
                <Card />
            </div>
        </>
    );

}

export { Home };