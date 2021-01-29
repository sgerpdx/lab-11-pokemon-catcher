import { getPokeInfo } from '../hunter/local-storage-utils.js';
import { makeLabelsArray, makeSeenArray, makeCaughtArray } from './chart-utils-munge.js';

const ctx = document.getElementById('chart').getContext('2d');

const pokeInfo = getPokeInfo();
console.log(pokeInfo);
//const data = [12, 19, 3, 5, 2, 3, 4, 5, 6, 7, 7, 8, 9, 11];
//const labelColors = ['bulbasaur', 'ivysaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'beedrill', 'weedle', 'kakuna', 'pidgey'];

const chart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelsArray(getPokeInfo()),
        datasets: [
            {
                label: 'xSeen',
                data: makeSeenArray(getPokeInfo()),
                backgroundColor: 'red',
            },
            {
                label: 'xCaught',
                data: makeCaughtArray(getPokeInfo()),
                backgroundColor: ['crimson', 'red', 'orange', 'gold', 'yellow', 'lightgreen', 'green', 'forestgreen', 'teal', 'turquoise', 'lightblue', 'blue', 'indigo', 'violet']
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});
