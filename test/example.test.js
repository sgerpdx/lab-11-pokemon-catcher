// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { renderPokeImage } from '../hunter/hunter-render.js';
import { numberSpinner, displayThree } from './hunter/hunter-app.js';


const test = QUnit.test;

// Test for renderItem function:

test('This test should take in the Pokemon object bulbasur and return its image', (assert) => {

    const bulbasur = {
        id: '5cef3501ef6005a77cd4fd17',
        pokemon: 'bulbasur',
        number: 1,
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    };

    const expected = `<img class="poke-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">`;

    const actual = renderPokeImage(bulbasur);

    assert.equal(actual.outerHTML, expected);
});


// Test for findById function:

// test('This test should take in the unique item id 1002 and the array medicines and return the object for Large Hypospray', (assert) => {

//     const expected = {
//         id: 1002,
//         name: 'Large Hypospray',
//         image: 'hypospray-large.jpg',
//         weight: 6,
//         size: 'large',
//         price: 15,
//         currency: 'locutus-coin-40.png'
//     };

//     const actual = findById(1002, medicines);

//     assert.deepEqual(actual, expected);
// });


//Test for dsiplayThree function:

// test('This function should return the image properties of three unique objects in the pokemon array', (assert) => {


//     const expected = ``;

//     const actual = displayThree();

//     assert.deepEqual(actual, expected);
// });


// Test for renderCart function:

// test('This test should take in separate-array objects cartScanner and inventoryScanner and retun a table row (<tr>)', (assert) => {

//     const cartScanner = {
//         id: 1010,
//         quantity: 4
//     };

//     const inventoryScanner = {
//         id: 1010,
//         name: 'Scanner',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Twelfth_Doctor%27s_Sonic_Screwdriver.jpg',
//         weight: 4,
//         size: 'Small',
//         price: 30,
//         currency: 'locutus-coin-40.png'
//     };

//     const expected = `<tr class="merch-item"><td class="inventory-name">Scanner</td><td class="merch-quantity">4</td><td class="merch-total-price">120 Locutii</td></tr>`;

//     const actual = renderCart(inventoryScanner, cartScanner);

//     assert.equal(actual.outerHTML, expected);
// });


// Test for calcOrderTotal function:

// test('This test should take in arrays fruitCart and fruitCatalog and return a total oder price of 17', (assert) => {

//     const fruitCart = [
//         {
//             id: 22,
//             quantity: 3
//         },
//         {
//             id: 27,
//             quantity: 2
//         }
//     ];

//     const fruitCatalog = [
//         {
//             id: 20,
//             name: 'Apple',
//             image: 'apple.png',
//             weight: 6,
//             size: 'Small',
//             price: 2
//         },
//         {
//             id: 22,
//             name: 'Plum',
//             image: 'plum.png',
//             weight: 4,
//             size: 'Small',
//             price: 3
//         },
//         {
//             id: 25,
//             name: 'Grape',
//             image: 'grape.png',
//             weight: 1,
//             size: 'Small',
//             price: 1
//         },
//         {
//             id: 27,
//             name: 'Peach',
//             image: 'peach.png',
//             weight: 8,
//             size: 'Small',
//             price: 4
//         }
//     ];

//     const expected = 17;

//     const actual = calcOrderTotal(fruitCart, fruitCatalog);

//     assert.deepEqual(actual, expected);
// });

