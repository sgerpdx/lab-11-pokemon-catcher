export function makeLabelsArray(arrayOfObjects) {
    const labelsArray = [];

    for (let item of arrayOfObjects) {
        labelsArray.push(item.name);
    }


    return labelsArray;
}


export function makeSeenArray(arrayOfObjects) {
    const seenArray = [];

    for (let item of arrayOfObjects) {
        seenArray.push(item.seen);
    }

    return seenArray;
}


export function makeCaughtArray(arrayOfObjects) {
    const caughtArray = [];

    for (let item of arrayOfObjects) {
        caughtArray.push(item.caught);
    }

    return caughtArray;
}

