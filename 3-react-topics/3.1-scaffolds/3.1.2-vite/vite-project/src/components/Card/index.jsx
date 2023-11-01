
import React from "react";
import pokemon from '../../assets/img/bulbi.jpg';
import './styles.css';

function Card() {

  return ( /** JSX */
    <React.Fragment>
      <div className="card">
        <h2 className="title-card">Bulbasaur</h2>
        <img src={pokemon} alt="Este es un pokemon" width="200" height="200" />
        <button data-index="1" className="button">saluda</button>
      </div>
    </React.Fragment>
  )
}

export { Card };