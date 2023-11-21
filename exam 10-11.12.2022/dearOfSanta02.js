function deerOfSanta(input) {

    let days = Number(input[0]);
    let hranaAllInKg = Number(input[1]);
    let hranaForFirstElenKg = Number(input[2]);
    let hranaForSecondElenKg = Number(input[3]);
    let hranaForTheirdElenKg = Number(input[4]);

    let sumHranaForElenite = days * (hranaForFirstElenKg + hranaForSecondElenKg + hranaForTheirdElenKg) 

    if (hranaAllInKg >= sumHranaForElenite) {
        console.log(`${Math.floor(hranaAllInKg - sumHranaForElenite)} kilos of food left.`);
    } else {

        console.log(`${Math.ceil(sumHranaForElenite - hranaAllInKg)} more kilos of food are needed.`);
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

