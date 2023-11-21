function bikeRace(input) {

    let juniorBikers = Number(input[0]);
    let seniorBikers = Number(input[1]);
    let trace = input[2];

    let juniorTaxTrace = 0;
    let seniorTaxTrace = 0;
    
    switch (trace) {

        case "trail":
            juniorTaxTrace = 5.50
            seniorTaxTrace = 7
        break;

        case "cross-country":
            juniorTaxTrace = 8
            seniorTaxTrace = 9.50
        break;

        case "downhill":
            juniorTaxTrace = 12.25
            seniorTaxTrace = 13.75
        break;

        case "road":
            juniorTaxTrace = 20
            seniorTaxTrace = 21.50
        break;
    }

    if (trace === "cross-country" && (juniorBikers + seniorBikers) >= 50) {

        juniorTaxTrace *= 0.75
        seniorTaxTrace *= 0.75

    }
    
    let sumTaxJunior = juniorBikers * juniorTaxTrace
    let sumTaxSenior = seniorBikers * seniorTaxTrace

    console.log(((sumTaxJunior + sumTaxSenior) * 0.95).toFixed(2));   
}

bikeRace (["30", "25", "cross-country"])