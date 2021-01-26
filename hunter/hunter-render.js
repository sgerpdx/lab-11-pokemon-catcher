export function renderPokeImage(poke) {

    // const div = document.createElement('div');
    // div.classList.add('poke-trio');

    const img = document.createElement('img');
    img.classList.add('poke-image');
    img.src = `${poke.image}`;
    // div.append(imgOne);

    // const imgTwo = document.createElement('img');
    // imgTwo.classList.add('poke-pic');
    // imgTwo.src = `../assets/${poke.pic}`;
    // div.append(imgTwo);

    // const imgThree = document.createElement('img');
    // imgThree.classList.add('poke-pic');
    // imgThree.src = `../assets/${poke.pic}`;
    // div.append(imgThree);

    return img;

}


// Dani's code:::
// export function renderPokeImage(pokemonItem) {
//     const image = document.createElement('img');

//     image.src = pokemonItem.url_image;

//     image.classList.add('poke-img');
//     image.addEventListener('click', () => {
//         incrementCaught(pokemonItem._id);

//         if (numberOfTurns < 5) {
//             setThreePokemon();
//         } else {
//             window.location = 'results';
//         }
//     });

//     return image;
// }