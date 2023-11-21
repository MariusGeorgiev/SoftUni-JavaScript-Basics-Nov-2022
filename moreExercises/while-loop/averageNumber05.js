function averageNumber(input) {

    let numNum = Number(input[0]);

    let allNumSum = 0;

    for (let i = 1; i <= numNum; i++) {

        let num = Number(input[i]);
        
        allNumSum += num    
    }
    console.log((allNumSum / numNum).toFixed(2));
}

averageNumber(["4", "3", "2", "4", "2"])