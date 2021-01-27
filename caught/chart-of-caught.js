const ctx = document.getElementById('chart').getContext('2d');

const data = [12, 19, 3, 5, 2, 3];
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelColors,
        datasets: [{
            label: 'Pokecatcher Results',
            data: data,
            backgroundColor: labelColors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
