import { SearchForm } from '../../components/SearchForm';
import { TrainersList } from '../../components/TrainersList';
import { Card } from '../../components/Card';

import './styles.css';

function Home() {

    const cards = [
        { name: 'ash' },
        { name: 'misty' },
        { name: 'juanito banana' },
    ];

    return (
        <>
            <div className='container-home'>
                <SearchForm />
                <TrainersList>

                    {/* {cards.map((card, index) => <Card key={index} name={card.name}/>)} */}

                    {
                        cards.map((card, index) => {
                            return (<Card key={index} name={card.name} />)
                        })
                    }

                </TrainersList>
            </div>
        </>
    );

}

export { Home };