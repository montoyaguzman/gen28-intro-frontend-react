
import React from "react";

function Card() {

  const nameComponent = 'patito';

  return ( /** JSX */
    <React.Fragment>
      <h1>{nameComponent} component works!</h1>
      <span>aqui iria el html de la tarjetita</span>
    </React.Fragment>
  )
}

export { Card };