const express = require('express');
const app = express();
const port = 3000;
const { pokemons } = require('../data/pokemons');

app.listen(port, () => {
  console.log(`Servidor pokemon runging in ${port}`);
});

// GET: Obtener todos los pokemons
app.get('/pokemons', (req, res) => {
    res.json(pokemons);
});
