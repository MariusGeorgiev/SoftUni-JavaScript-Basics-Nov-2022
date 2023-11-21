function oddEvenPositions(input) {

    let allNum = Number(input[0]);

    let oddSum = 0;
    let evenSum = 0;

    let currentMaxOddNum = Number.MIN_SAFE_INTEGER
    let currentMinOddNum = Number.MAX_SAFE_INTEGER

    let currentMaxEvenNum = Number.MIN_SAFE_INTEGER
    let currentMinEvenNum = Number.MAX_SAFE_INTEGER

    for(let numsInput = 1; numsInput <= allNum; numsInput++) {

        let num = Number(input[numsInput]);

        if (numsInput % 2 !== 0) {

            oddSum += num

            if (num >= currentMaxOddNum) {
                currentMaxOddNum = num.toFixed(2)
            } 
            if (num < currentMinOddNum) {
                currentMinOddNum = num.toFixed(2)
            }

        } else if (numsInput % 2 === 0) {

            evenSum += num

            if (num >= currentMaxEvenNum) {
                currentMaxEvenNum = num.toFixed(2)
            }
            if (num < currentMinEvenNum) {
                currentMinEvenNum = num.toFixed(2)
            }
        }
    }

    if (currentMaxOddNum === Number.MIN_SAFE_INTEGER) {
        currentMaxOddNum = "No"
    } 
    if (currentMinOddNum === Number.MAX_SAFE_INTEGER) {
        currentMinOddNum = "No"
    } 
    if (currentMaxEvenNum === Number.MIN_SAFE_INTEGER) {
        currentMaxEvenNum = "No"
    } 
    if (currentMinEvenNum === Number.MAX_SAFE_INTEGER) {
        currentMinEvenNum = "No"
    } 

    console.log(`OddSum=${oddSum.toFixed(2)},\nOddMin=${currentMinOddNum},\nOddMax=${currentMaxOddNum},\nEvenSum=${evenSum.toFixed(2)},\nEvenMin=${currentMinEvenNum},\nEvenMax=${currentMaxEvenNum}`);   
    
}
oddEvenPositions([6,
    2,
    3,
    5,
    4,
    2,
    1])