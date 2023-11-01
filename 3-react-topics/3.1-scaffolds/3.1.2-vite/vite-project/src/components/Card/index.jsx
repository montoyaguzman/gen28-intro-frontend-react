
import React from "react";
import './styles.css';

function Card(props) {

  console.log('props', props)

  return ( /** JSX */
    <React.Fragment>
      <div className="card">
        <h2 className="title-card">{props.name}</h2>
        <img src={props.img} alt="Este es un pokemon" width="200" height="200" />
        <button data-index="1" className="button">{props.name}</button>
      </div>
    </React.Fragment>
  )
}

export { Card };