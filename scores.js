function breakingRecords(scores) {
    // Write your code here
    let up = 0;
    let down = 0;
    let heighestScore = scores[0];
    let lowestScore = scores[0];

    for (let i = 0; i < scores.length; i++) {
        if (heighestScore < scores[i]) {
            heighestScore = scores[i]
            up++
        }
        else if (lowestScore > scores[i]) {
            lowestScore = scores[i]
            down++
        }
    }

    return [up, down]
}

// function breakingRecords(scores) {
//     let games = scores;
//     let min = games[0];
//     let max = games[0];

//     let minRecord = 0;
//     let maxRecord = 0;

//     for (const score of games) {
//         if (max < score) {
//             max = score;
//             maxRecord++;
//         }
//         else if (score < min) {
//             min = score;
//             minRecord++;
//         }
//     }

//     return [maxRecord, minRecord];
// }

console.log(breakingRecords([10, 20, 30, 40, 5, 4, 3, 2]))