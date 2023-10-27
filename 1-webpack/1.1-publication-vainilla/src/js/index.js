const listElementButtons = document.querySelectorAll('.sayHelloButton');

for (let i=0; i<listElementButtons.length; i++) {
    const buttonElement = listElementButtons[i];

    console.log(buttonElement)

    console.log(buttonElement.getAttribute('data-index'))

    buttonElement.addEventListener('click', () => {
        alert('Hola soy bulbasaur!');
    })
}


