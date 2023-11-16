import './styles.css';

import mistyImg from '../../assets/img/misty.jpeg';

function Card({ name }) {
    // function Card(props) {
    // const name = props.name;

    const imgStyles = {
        width: '100%',
        height: '100%',
    }

    return (
        <>
            <div className='container-card'>

                <div className="image-trainer">
                    <img src={mistyImg} alt="imagen del entrenador" style={imgStyles} />
                </div>
                <div className="card-content">
                    <div className="stats">
                        <p className="region-tag">region</p>
                        <div className="rank">
                            <p className="rank-label">rango</p>
                            <p className="rank-tag">40</p>
                        </div>
                    </div>
                    <h2 className="title">{name}</h2>

                    <div className="team">
                        <h3 className="team-label">Equipo</h3>
                        <div className="team-members">

                            <div className="pokemon-tag">
                                <p className="pokemon-tag--name">pikachu</p>
                                <p className="pokemon-tag--level">Nivel: 22</p>
                            </div>

                            <div className="pokemon-tag">
                                <p className="pokemon-tag--name">pikachu</p>
                                <p className="pokemon-tag--level">Nivel: 22</p>
                            </div>

                        </div>
                    </div>

                    <a href="#" className="button-default">más información</a>

                </div>
            </div>
        </>
    );

}

export { Card }; 