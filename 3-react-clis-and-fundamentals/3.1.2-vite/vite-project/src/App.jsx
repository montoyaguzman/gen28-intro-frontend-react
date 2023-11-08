
import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { CardList } from "./components/CardList";

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

  const renderPokemons = () => {
    console.log('pokemons', pokemons)
    return pokemons.map(element => {
      return <Card key={element.id} name={element.name} img={element.img} />
    })
  }

  const renderNoInfoMessage = () => {
    return (
      <>
        <h3>No hay pokemons disponibles</h3>
        <span>Por favor consulta mas tarde</span>
      </>
    )
  }

  return ( /** JSX */
    <React.Fragment>

      <Header />

      <CardList>
        {pokemons.length > 0 ? renderPokemons() : renderNoInfoMessage()}
      </CardList>

    </React.Fragment>
  )
}

export { App };