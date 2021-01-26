import { renderPokeImage } from './hunter-render.js';
import pokemon from './hunter-data.js';

export function heresThree() {

    const div = document.querySelector('div');

    for (const poke of pokemon) {

        const singlePoke = renderPokeImage(poke);
        div.append(singlePoke);

    }

}
