function specialNumbers(input) {

    let n = Number(input[0]);

    let saveSpecialNum = ""
   
    for (let sNumber = 1111; sNumber <= 9999; sNumber++) {

        numString = sNumber.toString()

        numString1 = Number(numString[0])
        numString2 = Number(numString[1])
        numString3 = Number(numString[2])
        numString4 = Number(numString[3])

        if(n % numString1 === 0 && n % numString2 === 0 && n % numString3 === 0 && n % numString4 === 0) {

            saveSpecialNum += sNumber + " "
        }
    }  
    console.log(saveSpecialNum);
}

specialNumbers(["3"])