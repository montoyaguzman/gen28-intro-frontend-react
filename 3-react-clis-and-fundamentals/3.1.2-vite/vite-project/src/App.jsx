
import React, { useEffect, useState } from "react";
import { CardPokemon } from "./components/CardPokemon";
import { Header } from "./components/Header";
import { CardList } from "./components/CardList";

import bulbiImg from './assets/img/bulbi.jpg';
import squirtleImg from './assets/img/squirtle.jpg';
import charmanderImg from './assets/img/charmander.png';
import { getPokemons } from "./services/Pokemons";

function App() {

  const initPokemons = [
    { id: 1, name: 'Bulbasaur', img: bulbiImg, description: 'este es el mejor pokemon de la vida' },
  ];

  // const body = {
  //   name: ''
  //   app: ''
  // }
  // const { name } = body

  const [pokemons, setPokemons] = useState(initPokemons);
  const [number, setNumber] = useState(0);
  // const pokemons = useState()[0];
  // const setPokemons = useState()[1];

  // const changePokemon = () => {
  //   const newPokemons = [
  //     { id: 1, name: 'Bulbasaur', img: bulbiImg, description: 'este es el mejor pokemon de la vida' },
  //     { id: 2, name: 'Squirtle', img: squirtleImg, description: 'en prioceso...' },
  //     { id: 3, name: 'Charmander', img: charmanderImg, description: 'en prioceso...' },
  //   ];
  //   // pokemons = newPokemons;
  //   setPokemons(newPokemons);
  //   console.log(pokemons)
  // }

  const getData = async () => {
    const newPokemons = await getPokemons();
    console.log('newPokemons', newPokemons)
    setPokemons(newPokemons);
  }

  // 1. Se actualiza cada que cambia el state por cualquier motivo
  useEffect(() => {
    console.log('dentro del primer useEffect NADA');
  });

  // 2. Solo se ejecuta la primera vez que carga el componente 
  useEffect(() => {
    console.log('dentro del segundo useEffect []');
    getData();
  }, []);

  // 3. Se ejecuta cada que cambia alguno de los valores del arreglo de condiciones
  useEffect(() => {
    console.log('dentro del primer useEffect NUMBER');
  }, [number]);

  const addNumber = () => {
    setNumber(number + 1);
  }

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

      <span>valor: {number}</span>
      <button onClick={addNumber}> suma 1 </button>

      <CardList>
        {pokemons.length > 0 ? renderPokemonApi() : renderNoInfoMessage()}
      </CardList>

    </React.Fragment>
  )
}

export { App };