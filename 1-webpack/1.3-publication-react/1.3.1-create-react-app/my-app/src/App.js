
import React from "react";

function App() {

  const name = 'dev.f compitas';

  return( /** JSX */
    <React.Fragment> 
      {/* Abrev de react.fragment <></> */}
      <h3>Hola desde App a todos los {name}!</h3>
      <button id="1"> saluda </button>
      <button id="2"> saluda 2 </button>
      <button id="3"> saluda 3</button>
    </React.Fragment>
  )
}

export default App;