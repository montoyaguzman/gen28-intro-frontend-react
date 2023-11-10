const URL = 'http://localhost:3000/pokemons';

const getPokemons = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    console.log('response express', response)
    return response;
}

export { getPokemons };