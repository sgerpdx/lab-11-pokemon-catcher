import { renderPokeImage } from './hunter-render.js';
import pokemon from './hunter-data.js';

//create global variable to track number of looks -- loop needs to keep *this* at <= 10.
//let lookCount = 0;
console.log('hellow');
const div = document.querySelector('div');

export function numberSpinner() {
    const spinner =
}

for (let lookCount = 1; lookCount < 10; lookCount++) {

    //idea: generate 3 random numbers first, by taking one random number and adding number
    let spinner = (Math.floor(Math.random() * 14));
    console.log(spinner);

    let pokeOne = 








    const spinnerOne = pokemon[spinner];

    //this assigns three random numbers
    if (0 < spinner < pokemon.length) {
        const spinnerTwo = pokemon[spinner - 1];
        const spinnerThree = pokemon[spinner + 1];

        const pokeOne = renderPokeImage(spinnerOne);
        const pokeTwo = renderPokeImage(spinnerTwo);
        const pokeThree = renderPokeImage(spinnerThree);
        div.append(pokeOne, pokeTwo, pokeThree);

    } else if (spinner === 0) {
        const spinnerTwo = pokemon[spinner + (pokemon.length - 1)];
        const spinnerThree = pokemon[spinner + 1];

        const pokeOne = renderPokeImage(spinnerOne);
        const pokeTwo = renderPokeImage(spinnerTwo);
        const pokeThree = renderPokeImage(spinnerThree);
        div.append(pokeOne, pokeTwo, pokeThree);

    } else {
        const spinnerTwo = pokemon[spinner - 1];
        const spinnerThree = pokemon[spinner - (pokemon.length + 1)];

        const pokeOne = renderPokeImage(spinnerOne);
        const pokeTwo = renderPokeImage(spinnerTwo);
        const pokeThree = renderPokeImage(spinnerThree);
        div.append(pokeOne, pokeTwo, pokeThree);

    }

}

