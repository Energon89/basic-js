// var turns = 0;

// function cauntTurns(n, A, B, C) {
//     if (n === 1) {
//         turns++;
//     } else {
//         cauntTurns(n - 1, A, C, B);
//         turns++;

//         cauntTurns(n - 1, C, B, A);
//     }
// }

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // cauntTurns(disksNumber, 0, 2, 1);
    const turns = Math.pow(2, disksNumber) - 1;
    const seconds = (Math.pow(2, disksNumber) - 1) / (turnsSpeed / 3600);
    return { turns, seconds };
}
