import pokemon from './hunter-data.js';
import { findById } from './hunter-app.js';

const POKEINFO = 'POKEINFO';

export function getPokeInfo() {
    let info = JSON.parse(localStorage.getItem(POKEINFO));

    if (!info) {
        info = [];
        localStorage.setItem(POKEINFO, JSON.stringify(info));
    }

    return info;
}


export function setPokeInfo(newInfo) {
    localStorage.setItem(POKEINFO, JSON.stringify(newInfo));
}


export function incrementSeen(id) {
    const info = getPokeInfo();
    const poke = findById(info, id);

    if (!poke) {
        const infoPokemon = findById(pokemon, id);

        const newInfo = {
            name: infoPokemon,
            id: id,
            seen: 1,
            caught: 0,
        };

        info.push(newInfo);
    } else {
        poke.seen++;
    }

    setPokeInfo(info);
}


export function incrementCaught(id) {
    const info = getPokeInfo();

    const poke = findById(id, info);

    poke.caught++;

    setPokeInfo(info);
}