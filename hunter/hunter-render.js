import { displayThree } from './hunter-app.js';
import { incrementCaught, } from './local-storage-utils.js';

let lookCount = 0;

export function renderPokeImage(poke) {

    const img = document.createElement('img');

    img.src = poke.image;

    img.classList.add('poke-image');
    img.addEventListener('click', () => {
        incrementCaught(poke.id);
        lookCount++;

        if (lookCount < 10) {
            displayThree();
        } else {
            window.location.href = './caught/index.html';
        }

    });

    return img;

    //name can be obtained in a parallel fashion to the image here

}

