function matchTickets(input) {

    let budget = Number(input[0]);
    let billetCategory = input[1];
    let peopleInTheGroup = Number(input[2]);
    let transport = 0;
    let categoryPrice = 0;

    if (peopleInTheGroup <= 4) { 
        transport = budget * 0.75

    } else if (peopleInTheGroup <= 9) {
        transport = budget * 0.60

    } else if (peopleInTheGroup <= 24) {
        transport = budget * 0.50

    } else if (peopleInTheGroup <= 49) {
        transport = budget * 0.40

    } else if (peopleInTheGroup >= 50) {
        transport = budget * 0.25

    }

    switch (billetCategory) {

        case "Normal":
            categoryPrice = 249.99

        break;

        case "VIP":
            categoryPrice = 499.99

        break;
    }

    if ((peopleInTheGroup * categoryPrice + transport) < budget) {

        let sumLast = budget - transport - (peopleInTheGroup * categoryPrice)
        console.log(`Yes! You have ${sumLast.toFixed(2)} leva left.`);

    } else if ((peopleInTheGroup * categoryPrice + transport) > budget) {  

        let neededSum = ((peopleInTheGroup * categoryPrice) + transport) - budget
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva.`);

    }
}
matchTickets(["30000", "VIP", "49"])