import { renderPokeImage } from './hunter-render.js';
import pokemon from './hunter-data.js';

//create global variable to track number of looks -- loop needs to keep *this* at <= 10.
let lookCount = 0;


for (let lookCount = 0; lookCount < 10; lookCount++) {
    const div = document.getElementById('div');

    //idea: generate 3 random numbers first, by taking one random number and adding number
    let spinner = (Math.floor(Math.Random) * 14);
    const spinnerOne = pokemon[spinner]; 0;

    //this assigns three random numbers
    if (0 < spinner < pokemon.length) {
        const spinnerTwo = pokemon[spinner - 1];
        const spinnerThree = pokemon[spinner + 1];

        const pokeOne = spinnerOne.id;
        const pokeTwo = spinnerTwo.id;
        const pokeThree = spinnerThree.id;
        div.append(pokeOne, pokeTwo, pokeThree);

    } else if (spinner === 0) {
        const spinnerTwo = pokemon[spinner + (pokemon.length - 1)];
        const spinnerThree = pokemon[spinner + 1];

        const pokeOne = spinnerOne.id;
        const pokeTwo = spinnerTwo.id;
        const pokeThree = spinnerThree.id;
        div.append(pokeOne, pokeTwo, pokeThree);

    } else {
        const spinnerTwo = pokemon[spinner - 1];
        const spinnerThree = pokemon[spinner - (pokemon.length + 1)];

        const pokeOne = spinnerOne.id;
        const pokeTwo = spinnerTwo.id;
        const pokeThree = spinnerThree.id;
        div.append(pokeOne, pokeTwo, pokeThree);

    }

}

