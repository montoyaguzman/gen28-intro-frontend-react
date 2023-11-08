
import React from "react";
import './styles.css';

function Card({ name, img }) {

  // const name = props.name;
  // const img = props.img;

  // const { name, img } = props;

  const styleTitlePokemon = {
    color: 'green',
    backgroundColor: 'yellow',
    fontSize: '22px',
  };

  return ( /** JSX */
    <React.Fragment>
      <div className="card">
        <h2 className="title-card" style={styleTitlePokemon}>{name}</h2>
        <img src={img} alt="Este es un pokemon" width="200" height="200" />
        <button data-index="1" className="button">{name}</button>
      </div>
    </React.Fragment>
  )
}

export { Card };