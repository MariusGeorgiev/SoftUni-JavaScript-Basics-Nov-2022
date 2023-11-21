function equalPairs(input) {
    let numPairs = Number(input[0]);

    let  firstNum = 0;
    let  secondNum = 0;

    let saveSumPairs = 0;

    let valueMin = Number.MAX_SAFE_INTEGER;
    let valueMax = Number.MIN_SAFE_INTEGER;

    let max = 0;
    let min = 0;

    let difference = 0;
    let difference2 = 0;


    for (let i = 1; i <= numPairs * 2; i += 2) {

       firstNum = Number(input[i]);
       secondNum = Number(input[i + 1]);

       saveSumPairs = firstNum + secondNum;

       if (saveSumPairs > valueMax) {
        valueMax = saveSumPairs;
       } else if (saveSumPairs < valueMax) {
        max = saveSumPairs;
       }

       if (saveSumPairs < valueMin) {
        valueMin = saveSumPairs;
       } else if (saveSumPairs > valueMin) {
        min = saveSumPairs;
       }
       difference = Math.abs(valueMin - valueMax);
       difference2 = Math.abs(min - max);
    }
    console.log(difference2);
}
equalPairs(['2', '1', '2', '2', '2'])