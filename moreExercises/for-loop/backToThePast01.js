function backToThePast(input) {

    let money = Number(input[0]);
    let year = Number(input[1]);

    let yearCounter = 1;
    let sumSpend = 0
    let ageIvancho = 18

    for(i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            sumSpend += 12000
        } else {
            sumSpend += 12000 + 50 * ageIvancho
        }
        ageIvancho++;
        yearCounter++;
    }
    if (money >= sumSpend) {
        console.log(`Yes! He will live a carefree life and will have ${(money - sumSpend).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(sumSpend - money).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["50000", "1802"])