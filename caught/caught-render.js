export function renderCaught(poke, record) {

    const tr = document.createElement('tr');
    tr.classList.add('caught-pokemon');

    const tdName = document.createElement('td');
    tdName.classList.add('poke-name');
    tdName.textContent = poke.name;
    tr.append(tdName);

    const tdSeen = document.createElement('td');
    tdSeen.classList.add('record-seen');
    tdSeen.textContent = record.seen;
    tr.append(tdSeen);

    const tdCaught = document.createElement('td');
    tdCaught.classList.add('record-caught');
    tdCaught.textContent = record.caught;
    tr.append(tdCaught);

    return tr;

}

