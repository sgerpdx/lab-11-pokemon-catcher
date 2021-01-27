import pokemon from '../hunter/hunter-data.js';
import { renderCaught } from './caught-render.js';
import { findById } from '../hunter/hunter-app.js';
import { clearRecord } from '../hunter/local-storage-utils.js';


export function showRecord() {

    const tbody = document.getElementById('table-body');

    const stringyInfo = localStorage.getItem('POKEINFO');
    const bag = JSON.parse(stringyInfo);
    console.log(tbody, bag);

    for (let item of bag) {

        const record = findById(item.id, pokemon);
        const tableRow = renderCaught(record, item);
        tbody.append(tableRow);
    }

}

showRecord();

const button = document.getElementById('replay');

button.addEventListener('click', () => {

    clearRecord();
    window.location.href = '../index.html';

});




