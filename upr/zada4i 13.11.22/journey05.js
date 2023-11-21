function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = ""
    let budgeSpend = 0
    let vacantionType = ""

    if (budget <= 100) {

    switch(season) {

        case "summer":
        destination = "Bulgaria"
        vacantionType = "Camp"
        budgeSpend = budget * 0.30
        break;

        case "winter":
        destination = "Bulgaria"
        vacantionType = "Hotel"
        budgeSpend = budget * 0.70
        break;  
    }
    }
    else if (budget <= 1000) {

        switch(season) {

            case "summer":
            destination = "Balkans"
            vacantionType = "Camp"
            budgeSpend = budget * 0.40
            break;
    
            case "winter":
            destination = "Balkans"
            vacantionType = "Hotel"
            budgeSpend = budget * 0.80
            break;
        }
    }

    else if (budget > 1000) {

        switch(season) {

            case "summer":
            destination = "Europe"
            vacantionType = "Hotel"
            budgeSpend = budget * 0.90
            break;
    
            case "winter":
            destination = "Europe"
            vacantionType = "Hotel"
            budgeSpend = budget * 0.90
            break;
        }
    }

console.log(`Somewhere in ${destination}`)
console.log(`${vacantionType} - ${(budgeSpend).toFixed(2)}`)

}

journey(["50", "summer"])