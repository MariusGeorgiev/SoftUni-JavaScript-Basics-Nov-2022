function fishingBoot(input) {

    let budgetGroup = Number(input[0]);
    let season = input[1];
    let fisherMan = Number(input[2]);

    let price = 0

    switch(season) {

        case "Spring":

        if (fisherMan <= 6) {

            price = 3000 * 0.90

            if (fisherMan % 2===0) {
                price = 3000 * 0.90 * 0.95
            }
        }
        else if (fisherMan <= 11) {

            price = 3000 * 0.85

            if (fisherMan % 2===0) {

            price = 3000 * 0.85 * 0.95
            }
        }
        else if (fisherMan >= 12) {

            price = 3000 * 0.75

            if (fisherMan % 2===0) {

            price = 3000 * 0.75 * 0.95
            }
        }
        break;

        case "Summer":

            if (fisherMan <= 6) {

                price = 4200 * 0.90
    
                if (fisherMan % 2===0) {
                    price = 4200 * 0.90 * 0.95
                }
            }
            else if (fisherMan <= 11) {
    
                price = 4200 * 0.85
    
                if (fisherMan % 2===0) {
    
                price = 4200 * 0.85 * 0.95
                }
            }
            else if (fisherMan >= 12) {
    
                price = 4200 * 0.75
    
                if (fisherMan % 2===0) {
    
                price = 4200 * 0.75 * 0.95
                }
            }
        break;

        case "Autumn":

            if (fisherMan <= 6) {

                price = 4200 * 0.90
            }
            else if (fisherMan <= 11) {
    
                price = 4200 * 0.85
            }
            else if (fisherMan >= 12) {
    
                price = 4200 * 0.75
            }
        break;

        case "Winter":

            if (fisherMan <= 6) {

                price = 2600 * 0.90
    
                if (fisherMan % 2===0) {
                    price = 2600 * 0.90 * 0.95
                }
            }
            else if (fisherMan <= 11) {
    
                price = 2600 * 0.85
    
                if (fisherMan % 2===0) {
    
                price = 2600 * 0.85 * 0.95
                }
            }
            else if (fisherMan >= 12) {
    
                price = 2600 * 0.75
    
                if (fisherMan % 2===0) {
    
                price = 2600 * 0.75 * 0.95
                }
            }
        break;
    }

    if (budgetGroup >= price) {
        console.log(`Yes! You have ${(budgetGroup - price).toFixed(2)} leva left.`)
    }
    else if (price > budgetGroup) {

        console.log(`Not enough money! You need ${(price - budgetGroup).toFixed(2)} leva.`)
    }

}

fishingBoot(["3600", "Autumn", ""])