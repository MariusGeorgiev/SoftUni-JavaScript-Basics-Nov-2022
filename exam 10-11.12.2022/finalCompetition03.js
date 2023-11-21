function finalCompetition(input) {

    let numTanciori = Number(input[0]);
    let numCash = Number(input[1]);
    let season = input[2];
    let country = input[3];

    let sumAllCash = numCash * numTanciori
    let discount = 0;

    switch (season) {
        case "summer":

        switch (country) {
            case "Bulgaria":
                discount = 0.05
            break;

            default: 
            discount = 0.10
            break;
        }
        break;

        case "winter":
            switch (country) {
                case "Bulgaria":
                    discount = 0.08
                break;
    
                default: 
                discount = 0.15
                break;
            }
       break;
    }

    if (country !== "Bulgaria") {
        let addAboardPercent = sumAllCash + (sumAllCash * 0.50);
        let razhodi = addAboardPercent - (addAboardPercent * discount);
        let charity = razhodi * 0.75
        let leftMoney = razhodi - charity
        let moneyforDancer = leftMoney / numTanciori

        console.log(`Charity - ${charity.toFixed(2)}`);
        console.log(`Money per dancer - ${moneyforDancer.toFixed(2)}`);
    } else {
        let razhodi = sumAllCash - (sumAllCash * discount)
        let charity = razhodi * 0.75
        let leftMoney = razhodi - charity
        let moneyforDancer = leftMoney / numTanciori


        console.log(`Charity - ${charity.toFixed(2)}`);
        console.log(`Money per dancer - ${moneyforDancer.toFixed(2)}`);
    }

}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

