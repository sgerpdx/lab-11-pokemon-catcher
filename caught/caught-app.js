//shopping-cart:
import { getPokeInfo, setPokeInfo, incrementSeen, incrementCaught } from '../hunter/local-storage-utils.js';
import pokemon from '../hunter/hunter-data.js';
import catches from './caught/caught-data.js';
import { renderCaught } from './caught-render.js';
import { findById } from '../hunter/hunter-app.js';


const tbody = document.querySelector('table-body');
const stringyInfo = localStorage.getItem('POKEINFO');
const bag = JSON.parse(stringyInfo);


for (let item of bag) {

    const bagItem = item;
    const record = findById(bagItem.id, pokemon);
    const tableRow = renderCaught(record, bagItem);
    tbody.append(tableRow);
}



