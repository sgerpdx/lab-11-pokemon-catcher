import { renderPokeImage } from './hunter-render.js';
import pokemon from './hunter-data.js';

//create global variable to track number of looks -- loop needs to keep *this* at <= 10.
//let lookCount = 0;
console.log('hellow');
const div = document.querySelector('div');

export function numberSpinner() {
    const spinner = (Math.floor(Math.random() * pokemon.length));
    return spinner;
}

for (let lookCount = 1; lookCount < 10; lookCount++) {

    let pokeOne = numberSpinner();
    let pokeTwo = numberSpinner();
    let pokeThree = numberSpinner();

    // while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {
    //     let pokeOne = numberSpinner();
    //     let pokeTwo = numberSpinner();
    //     let pokeThree = numberSpinner();
    // }

    const imgOne = renderPokeImage(pokeOne);
    const imgTwo = renderPokeImage(pokeTwo);
    const imgThree = renderPokeImage(pokeThree);


    div.append(imgOne, imgTwo, imgThree);

    //this assigns three random numbers
    // if (0 < spinner < pokemon.length) {
    //     const spinnerTwo = pokemon[spinner - 1];
    //     const spinnerThree = pokemon[spinner + 1];

    //     const pokeOne = renderPokeImage(spinnerOne);
    //     const pokeTwo = renderPokeImage(spinnerTwo);
    //     const pokeThree = renderPokeImage(spinnerThree);
    //     div.append(pokeOne, pokeTwo, pokeThree);

    // } else if (spinner === 0) {
    //     const spinnerTwo = pokemon[spinner + (pokemon.length - 1)];
    //     const spinnerThree = pokemon[spinner + 1];

    //     const pokeOne = renderPokeImage(spinnerOne);
    //     const pokeTwo = renderPokeImage(spinnerTwo);
    //     const pokeThree = renderPokeImage(spinnerThree);
    //     div.append(pokeOne, pokeTwo, pokeThree);

    // } else {
    //     const spinnerTwo = pokemon[spinner - 1];
    //     const spinnerThree = pokemon[spinner - (pokemon.length + 1)];

    //     const pokeOne = renderPokeImage(spinnerOne);
    //     const pokeTwo = renderPokeImage(spinnerTwo);
    //     const pokeThree = renderPokeImage(spinnerThree);
    //     div.append(pokeOne, pokeTwo, pokeThree);

    // }

}

