const URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemons = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    console.log('response', response)
}

export { getPokemons };