function goldMine(input) {

    let numOfLocations = Number(input[0]);

    let index = 1

    for (let i = 1; i <= numOfLocations; i++) {

        let miningDaySum = 0;

        let expectedGoldDay = Number(input[index]);
         index++;
        
        let daysForMining = Number(input[index]);
        index++;
    
        for (let day = 1; day <= daysForMining; day++) {

            let currentMined = Number(input[index]);

            miningDaySum += currentMined

            index++;

        }

        let avgSumMined = miningDaySum / daysForMining

        if (avgSumMined >= expectedGoldDay) {
            console.log(`Good job! Average gold per day: ${avgSumMined.toFixed(2)}.`);


        } else if (avgSumMined < expectedGoldDay) {
            let neededGoldToExpected = expectedGoldDay - avgSumMined

            console.log(`You need ${neededGoldToExpected.toFixed(2)} gold.`);
        } 

    }

}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])
