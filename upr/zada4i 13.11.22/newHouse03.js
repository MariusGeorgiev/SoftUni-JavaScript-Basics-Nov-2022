function newHouse(input) {

    let flowers = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sumPriceFlower = 0;



    switch(flowers) {

        case "Roses":
            if (numFlowers > 80) {

                sumPriceFlower = 5 * numFlowers * 0.90

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
             else if (numFlowers <= 80) {

                sumPriceFlower = 5 * numFlowers

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
        break;

        case "Dahlias":
            if (numFlowers > 90) {

                sumPriceFlower = 3.80 * numFlowers * 0.85

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
             else if (numFlowers <= 90) {

                sumPriceFlower = 3.80 * numFlowers

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
        break;

        case "Tulips":
            if (numFlowers > 80) {

                sumPriceFlower = 2.80 * numFlowers * 0.85

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
             else if (numFlowers <= 80) {

                sumPriceFlower = 2.80 * numFlowers

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
        break;

        case "Narcissus":
            if (numFlowers >= 120) {

                sumPriceFlower = 3 * numFlowers

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
             else if (numFlowers < 120) {

                sumPriceFlower = 3 * numFlowers * 1.15

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
        break;

        case "Gladiolus":
            if (numFlowers >= 80) {

                sumPriceFlower = 2.50 * numFlowers

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
             else if (numFlowers < 80) {

                sumPriceFlower = 2.50 * numFlowers * 1.20

                if (budget >= sumPriceFlower) {

                console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - sumPriceFlower).toFixed(2)} leva left.`) }
                
                else if (budget < sumPriceFlower) {
    
                    console.log(`Not enough money, you need ${(sumPriceFlower - budget).toFixed(2)} leva more.`) }
            }
        break;
    }
}

newHouse(["Dahlias", "91", "970"])