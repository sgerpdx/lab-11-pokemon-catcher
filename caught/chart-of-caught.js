import { getPokeInfo } from '../hunter/local-storage-utils.js';
import { makeLabelsArray, makeSeenArray, makeCaughtArray } from './chart-utils-munge.js';

const ctx = document.getElementById('chart').getContext('2d');



const chart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelsArray(getPokeInfo()),
        datasets: [
            {
                label: 'xSeen',
                data: makeSeenArray(getPokeInfo()),
                backgroundColor: 'blue',
            },
            {
                label: 'xCaught',
                data: makeCaughtArray(getPokeInfo()),
                backgroundColor: 'red',
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

