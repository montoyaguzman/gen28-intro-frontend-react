import { SearchForm } from '../../components/SearchForm';
import { TrainersList } from '../../components/TrainersList';
import { Card } from '../../components/Card';

import './styles.css';
import { useEffect, useState } from 'react';
import { getTrainers } from '../../services/trainers';
import { normalizedTrainers } from '../../normalized/trainers';

function Home() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        // logic to do only the first time
        getData();
    }, []);

    const getData = async () => {
        const newTrainers = await getTrainers();
        const newTrainersNormalized = await normalizedTrainers(newTrainers);
        setCards(newTrainersNormalized);
    }

    return (
        <>
            <div className='container-home'>
                <SearchForm />
                <TrainersList>

                    {/* {cards.map((card, index) => <Card key={index} name={card.name}/>)} */}

                    {
                        cards.map((card, index) => {
                            return (
                                <Card
                                    key={index}
                                    region={card.region}
                                    rank={card.rank}
                                    team={card.team}
                                    name={card.name}
                                    img={card.img}
                                />)
                        })
                    }

                </TrainersList>
            </div>
        </>
    );

}

export { Home };