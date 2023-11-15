const pokemons = [  
    { 
        id: 1, 
        name: 'Bulbasaur', 
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', 
        description: 'Pokemon inicial de planta',
        type: ['grass', 'poison']
    },
    { 
        id: 2,
        name: 'Ivysaur',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
        description: 'Bulbasaur versión adolescente',
        type: ['grass', 'poison']
    },
    { 
        id: 3,
        name: 'Venusaur',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        description: 'Bulbasaur grandote',
        type: ['grass', 'poison']
    },
    { 
        id: 4, 
        name: 'Charmander', 
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', 
        description: 'Soy el pokemon mas popular',
        type: ['fire']
    },
    { 
        id: 5,
        name: 'Charmeleon',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
        description: 'Charmander versión adolescente',
        type: ['fire']
    },
    { 
        id: 6,
        name: 'Charizard',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        description: 'Charmander grandote',
        type: ['fire', 'flight']
    },
    { 
        id: 7, 
        name: 'Squirtle', 
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', 
        description: 'Soy el del meme de "vamoo a calmarno" ',
        type: ['water']
    },
    { 
        id: 8,
        name: 'Wartortle',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
        description: 'Squirtle version adolescente',
        type: ['water']
    },
    { 
        id: 9,
        name: 'Blastoise',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        description: 'Squirtle grandote',
        type: ['water']
    },
];

module.exports = { pokemons };