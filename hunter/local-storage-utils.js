const POKEINFO = 'POKEINFO';
import pokemon from './hunter-data.js';
import { findById } from './hunter-app.js';


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
            name: infoPokemon.name,
            id: id,
            seen: 1,
            caught: 1
        };

        info.push(newInfo);
    } else {
        poke.seen++;
    }

    setPokeInfo(info);
}


export function incrementCaught(id) {
    const info = getPokeInfo();

    const poke = findById(info, id);

    poke.caught++;

    setPokeInfo(info);
}