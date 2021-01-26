import { renderPokeImage } from './hunter-render.js';
import pokemon from './hunter-data.js';

const div = document.querySelector('div');

export function numberSpinner() {
    const spinner = (Math.floor(Math.random() * pokemon.length));
    return pokemon[spinner];
}

export function displayThree() {

    let pokeOne = numberSpinner();
    let pokeTwo = numberSpinner();
    let pokeThree = numberSpinner();

    while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {
        pokeOne = numberSpinner();
        pokeTwo = numberSpinner();
        pokeThree = numberSpinner();
    }

    const imgOne = renderPokeImage(pokeOne);
    const imgTwo = renderPokeImage(pokeTwo);
    const imgThree = renderPokeImage(pokeThree);

    div.textContent = '';

    div.append(imgOne, imgTwo, imgThree);

}

//this for loop is not good, because it is appending based on the number of times through the loop, not page reloads;
// for (let lookCount = 1; lookCount < 10; lookCount++) {



// }



export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}
