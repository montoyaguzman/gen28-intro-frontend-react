
import React from "react";
import { CardPokemon } from "./components/CardPokemon";
import { Header } from "./components/Header";
import { CardList } from "./components/CardList";

import bulbiImg from './assets/img/bulbi.jpg';
import squirtleImg from './assets/img/squirtle.jpg';
import charmanderImg from './assets/img/charmander.png';

function App() {

  const pokemons = [
    { id: 1, name: 'Bulbasaur', img: bulbiImg, description: 'este es el mejor pokemon de la vida' },
    { id: 2, name: 'Squirtle', img: squirtleImg, description: 'en prioceso...' },
    { id: 3, name: 'Charmander', img: charmanderImg, description: 'en prioceso...' },
    { id: 4, name: 'Charmander 2', img: charmanderImg, description: 'en prioceso...' },
    { id: 5, name: 'Charmander 2', img: charmanderImg, description: 'en prioceso...' },
    { id: 6, name: 'Charmander 2', img: charmanderImg, description: 'en prioceso...' },
  ];

  const renderPokemons = () => {
    console.log('pokemons', pokemons)
    return pokemons.map(element => {
      return <CardPokemon key={element.id} name={element.name} img={element.img} description={element.description} />
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