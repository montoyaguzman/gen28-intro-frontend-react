
import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import bulbiImg from './assets/img/bulbi.jpg';
import squirtleImg from './assets/img/squirtle.jpg';
import charmanderImg from './assets/img/charmander.png';

function App() {

  const bulbasaur = { id: 1, name: 'Bulbasaur', img: bulbiImg };
  const squirtle = { id: 2, name: 'Squirtle', img: squirtleImg };
  const charmander = { id: 3, name: 'Charmander', img: charmanderImg };

  return ( /** JSX */
    <React.Fragment>
      <Header />
      {/* <input type="text" placeholder="escribe tu usuario..." value="montoya" /> */}
      <Card name={bulbasaur.name} img={bulbasaur.img} />
      <Card name={squirtle.name} img={squirtle.img} />
      <Card name={charmander.name} img={charmander.img} />
    </React.Fragment>
  )
}

export default App;