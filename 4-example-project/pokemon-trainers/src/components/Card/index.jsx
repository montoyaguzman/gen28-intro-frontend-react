import './styles.css';

function Card({ name }) {
    // function Card(props) {
    // const name = props.name;

    return (
        <>
            <div className='container-card'>
                <h1>card works!</h1>
                <span>name: {name}</span>
            </div>
        </>
    );

}

export { Card };