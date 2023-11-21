function gameOfIntervals(input) {

    let numMoves = Number(input[0]);

    let sumAllPoints = 0;

    let num0To9 = 0;
    let num10To19 = 0;
    let num20To29 = 0;
    let num30To39 = 0;
    let num40To50 = 0;
    let pointsInvalidNumber = 0;
    let numInvalid= 0;

    for (let i = 1; i <= numMoves; i++) {

        let newNums = Number(input[i]);

        if (newNums >= 0 && newNums <= 9) {
            num0To9++;
            sumAllPoints += newNums * 0.20
        } else if (newNums >= 10 && newNums <= 19) {
            num10To19++;
            sumAllPoints += newNums * 0.30
        } else if (newNums >= 20 && newNums <= 29) {
            num20To29++;
            sumAllPoints += newNums * 0.40
        } else if (newNums >= 30 && newNums <= 39) {
            num30To39++;
            sumAllPoints += 50
        } else if (newNums >= 40 && newNums <= 50) {
            num40To50++;
            sumAllPoints += 100
        } 

        if (newNums > 50 || newNums < 0) {
            numInvalid++;
            pointsInvalidNumber = sumAllPoints / 2
            sumAllPoints -= pointsInvalidNumber 
        }

    }

    console.log(sumAllPoints.toFixed(2));
    console.log(`From 0 to 9: ${(num0To9 / numMoves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(num10To19 / numMoves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(num20To29 / numMoves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(num30To39 / numMoves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(num40To50 / numMoves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(numInvalid / numMoves * 100).toFixed(2)}%`);

}
gameOfIntervals([
    '10',  '43', '57',
    '-12', '23', '12',
    '0',   '50', '40',
    '30',  '20'
  ])