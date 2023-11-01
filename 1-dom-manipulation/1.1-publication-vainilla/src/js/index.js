// const listElementButtons = document.querySelectorAll('.sayHelloButton');

// for (let i=0; i<listElementButtons.length; i++) {
//     const buttonElement = listElementButtons[i];

//     console.log(buttonElement)

//     console.log(buttonElement.getAttribute('data-index'))

//     buttonElement.addEventListener('click', () => {
//         alert('Hola soy bulbasaur!');
//     })
// }

const sectionElement = document.querySelector('section');

const pokemons = [
    { id: 1, name: 'Bulbasaur', img: '../assets/img/bulbi.jpg' },
    { id: 2, name: 'Charmander', img: '../assets/img/charmander.png' },
    { id: 3, name: 'Squirtle', img: '../assets/img/squirtle.jpg' },
    { id: 4, name: 'Pikachu', img: '../assets/img/squirtle.jpg' },
    { id: 4, name: 'Pikachu', img: '../assets/img/squirtle.jpg' },
    { id: 4, name: 'Pikachu', img: '../assets/img/squirtle.jpg' },
];

const render = () => {
    for (let i=0; i<pokemons.length; i++) {
        const divElement = document.createElement('div');
        const titleElement = document.createElement('h2');
        const imgElement = document.createElement('img');
        const buttonElement = document.createElement('button');

        divElement.className = 'card';
        titleElement.innerHTML = pokemons[i].name;
        titleElement.className = 'title-card';
        imgElement.setAttribute('src', pokemons[i].img);
        imgElement.setAttribute('width', 200);
        imgElement.setAttribute('height', 200);
        buttonElement.innerHTML = pokemons[i].name;
        buttonElement.className = 'button';

        buttonElement.addEventListener('click', (event) => {
            console.log(event.target)
            const message = `Hola soy ${event.target.innerText}!`
            alert(message);
        });

        sectionElement.appendChild(divElement);
        divElement.appendChild(titleElement);
        divElement.appendChild(imgElement);
        divElement.appendChild(buttonElement);

    }
}

render();


