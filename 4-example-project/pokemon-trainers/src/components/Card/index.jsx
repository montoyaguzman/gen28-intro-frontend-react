import './styles.css';

import defaultPhoto from '../../assets/img/default-photo.jpeg';

function Card({ region, rank, team, name, img }) {
    // function Card(props) {
    // const name = props.name;

    const imgStyles = {
        width: '100%',
        height: '100%',
    }

    /**
     * SI EXISTE
     * img => img === string, tenga al menos un caracter
     * img => img === number, que sea un numero mayor a 0
     * img => img === objeto, que sea un objeto con al menos una prop { name: '' }
     * img => img === array, que sea un objeto con al menos tenga un valor [2]
     * que no sea ni null ni undefined
     * 
     * SI NO EXITSE
     * !img
     * ...
     */


    return (
        <>
            <div className='container-card'>

                <div className="image-trainer">
                    <img src={img || defaultPhoto} alt="imagen del entrenador" style={imgStyles} />
                    {/* <img src={!img ? defaultPhoto : img} alt="imagen del entrenador" style={imgStyles} /> */}
                    {/* <img src={img === '' ? defaultPhoto : img} alt="imagen del entrenador" style={imgStyles} /> */}
                </div>
                <div className="card-content">
                    <div className="stats">
                        <p className="region-tag">{region}</p>
                        <div className="rank">
                            <p className="rank-label">rango</p>
                            <p className="rank-tag">{rank}</p>
                        </div>
                    </div>
                    <h2 className="title">{name}</h2>

                    <div className="team">
                        <h3 className="team-label">Equipo</h3>
                        <div className="team-members">

                            {team.map((element, index) => {
                                return (
                                    <div className="pokemon-tag" key={index}>
                                        <p className="pokemon-tag--name">{element.pokemon}</p>
                                        <p className="pokemon-tag--level">Nivel: {element.level}</p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    <a href="#" className="button-default">más información</a>

                </div>
            </div>
        </>
    );

}

export { Card }; 