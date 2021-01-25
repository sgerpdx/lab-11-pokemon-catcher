export function renderPokePic(medicine) {

    const div = document.createElement('div');
    div.classList.add('poke-trio');

    const imgOne = document.createElement('img');
    imgOne.classList.add('poke-pic');
    imgOne.src = `../assets/${poke.pic}`;
    div.append(imgOne);

    const imgTwo = document.createElement('img');
    imgTwo.classList.add('poke-pic');
    imgTwo.src = `../assets/${poke.pic}`;
    div.append(imgTwo);

    const imgThree = document.createElement('img');
    imgThree.classList.add('poke-pic');
    imgThree.src = `../assets/${poke.pic}`;
    div.append(imgThree);

    return div;

}
