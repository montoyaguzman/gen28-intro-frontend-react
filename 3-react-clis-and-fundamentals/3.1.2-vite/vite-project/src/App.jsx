
import React from "react";
import { CardPokemon } from "./components/CardPokemon";
import { Header } from "./components/Header";
import { CardList } from "./components/CardList";

import bulbiImg from './assets/img/bulbi.jpg';
import squirtleImg from './assets/img/squirtle.jpg';
import charmanderImg from './assets/img/charmander.png';
import { getPokemons } from "./services/Pokemons";

function App() {

  let pokemons = [
    { id: 1, name: 'Bulbasaur', img: bulbiImg, description: 'este es el mejor pokemon de la vida' },
    { id: 2, name: 'Squirtle', img: squirtleImg, description: 'en prioceso...' },
    { id: 3, name: 'Charmander', img: charmanderImg, description: 'en prioceso...' },
    { id: 4, name: 'Charmander 2', img: charmanderImg, description: 'en prioceso...' },
    { id: 5, name: 'Charmander 2', img: charmanderImg, description: 'en prioceso...' },
    { id: 6, name: 'Charmander 2', img: charmanderImg, description: 'en prioceso...' },
  ];

  const changePokemon = () => {
    const newPokemons = [
      { id: 1, name: 'Bulbasaur', img: bulbiImg, description: 'este es el mejor pokemon de la vida' },
      { id: 2, name: 'Squirtle', img: squirtleImg, description: 'en prioceso...' },
      { id: 3, name: 'Charmander', img: charmanderImg, description: 'en prioceso...' },
    ];
    pokemons = newPokemons;
    console.log(pokemons)
  }

  // getPokemons();

  const renderPokemons = () => {
    console.log('pokemons', pokemons)
    return pokemons.map(element => {
      return <CardPokemon key={element.id} name={element.name} img={element.img} description={element.description} />
    })
  }

  const renderNoInfoMessage = () => {
    return (
      <>
        <h4>
          No hay pokemons disponibles
        </h4>
      </>
    )
  };

  const renderPokemonApi = () => {
    console.log('pokemons', pokemons)
    return pokemons.map((element, index) => {
      return (<h1 key={index}>{element.name}</h1>)
    })
  }

  return ( /** JSX */
    <React.Fragment>

      <Header />

      <button onClick={changePokemon}> update pokemon </button>

      <CardList>
        {pokemons.length > 0 ? renderPokemonApi() : renderNoInfoMessage()}
      </CardList>

    </React.Fragment>
  )
}

export { App };