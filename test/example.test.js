import { renderPokeImage } from '../hunter/hunter-render.js';
import { renderCaught } from '../caught/caught-render.js';
import pokemon from '../hunter/hunter-data.js';
import { findById } from '../hunter/hunter-app.js';
import { makeSeenArray } from '../caught/chart-utils-munge.js';

const test = QUnit.test;

// Test for renderPokeImage function:

test('This test should take in the Pokemon object bulbasur and return its image', (assert) => {

    const bulbasur = {
        id: '5cef3501ef6005a77cd4fd17',
        pokemon: 'bulbasur',
        number: 1,
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    };

    const expected = `<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" class="poke-image">`;

    const actual = renderPokeImage(bulbasur);

    assert.equal(actual.outerHTML, expected);
});



// Test for findById function:

test('This test should take in the unique item id 1002 and the array medicines and return the object for Large Hypospray', (assert) => {

    const expected = {
        id: '5cef3501ef6005a77cd4fd17',
        name: 'bulbasaur',
        number: 1,
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    };


    const actual = findById('5cef3501ef6005a77cd4fd17', pokemon);

    assert.deepEqual(actual, expected);
});



// Test for renderCaught function:

test('This test should take in separate-array objects cartScanner and inventoryScanner and retun a table row (<tr>)', (assert) => {

    const pokeRecord = {
        id: '5cef3501ef6005a77cd4fd17',
        seen: 3,
        caught: 1
    };

    const pokeProfile = {
        id: '5cef3501ef6005a77cd4fd17',
        name: 'bulbasaur',
        number: 1,
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    };

    const expected = `<tr class="caught-pokemon"><td class="poke-name">bulbasaur</td><td class="record-seen">3</td><td class="record-caught">1</td></tr>`;

    const actual = renderCaught(pokeProfile, pokeRecord);

    assert.equal(actual.outerHTML, expected);
});



// Test for makeSeenArray function:

test('This function should take in a pokemon-caught-seen array and return an array of numbers for just the seen-count', (assert) => {

    const pokeResults = [
        {
            id: '5cef3501ef6005a77cd4fd17',
            seen: 7,
            caught: 3,
        },
        {
            id: '5cef3501ef6005a77cd4fd19',
            seen: 6,
            caught: 2,
        },
        {
            id: '5cef3501ef6005a77cd4fd1a',
            seen: 5,
            caught: 3,
        },
    ];

    const expected = [7, 6, 5];

    const actual = makeSeenArray(pokeResults);

    assert.deepEqual(actual, expected);
});

