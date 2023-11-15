import './styles.css';

function Card() {

    const nameComponent = 'card'

    return (
        <>
            <div className='container-card'>
                <h1>{nameComponent} works!</h1>
                <span>este es el component card</span>
            </div>
        </>
    );

}

export { Card };