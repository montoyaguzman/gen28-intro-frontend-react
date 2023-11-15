import { SearchForm } from '../../components/SearchForm';
import { TrainersList } from '../../components/TrainersList';
import { Card } from '../../components/Card';

import './styles.css';

function Home() {

    return (
        <>
            <div className='container-home'>
                <SearchForm />
                <TrainersList />
                <Card />
            </div>
        </>
    );

}

export { Home };