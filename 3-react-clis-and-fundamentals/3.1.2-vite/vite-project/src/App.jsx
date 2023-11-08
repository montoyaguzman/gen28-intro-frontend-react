
import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import bulbiImg from './assets/img/bulbi.jpg';
import squirtleImg from './assets/img/squirtle.jpg';
import charmanderImg from './assets/img/charmander.png';

function App() {

  const pokemons = [
    { id: 1, name: 'Bulbasaur', img: bulbiImg },
    { id: 2, name: 'Squirtle', img: squirtleImg },
    { id: 3, name: 'Charmander', img: charmanderImg },
    { id: 4, name: 'Charmander 2', img: charmanderImg },
    { id: 5, name: 'Charmander 2', img: charmanderImg },
    { id: 6, name: 'Charmander 2', img: charmanderImg },
    { id: 7, name: 'Charmander 2', img: charmanderImg },
    { id: 8, name: 'Charmander 2', img: charmanderImg },
    { id: 9, name: 'Charmander 2', img: charmanderImg },
  ];

  return ( /** JSX */
    <React.Fragment>
      <Header />
      {/* <input type="text" placeholder="escribe tu usuario..." value="montoya" /> */}
      {/* <Card name={bulbasaur.name} img={bulbasaur.img} />
      <Card name={squirtle.name} img={squirtle.img} />
      <Card name={charmander.name} img={charmander.img} />
      <Card name={charmander2.name} img={charmander2.img} /> */}
      <div className="card-container">
        {
          pokemons.map(element => (
            <Card key={element.id} name={element.name} img={element.img} />
          ))
        }
      </div>

    </React.Fragment>
  )
}

export { App };