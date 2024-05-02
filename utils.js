// Author https://www.joshwcomeau.com/
export function range(start, end, step= 1) {
    let output = [];
    if (typeof end === 'undefined'){
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i)
    }

    return output
}
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randInt = Math.floor(Math.random() * (i + 1))
        const tmp = array[i];
        array[i] = array[randInt]
        array[randInt] = tmp;
    }
    return array;
}
