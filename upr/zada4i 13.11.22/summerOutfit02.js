function summerOutfit(input) {

    let degrease = Number(input[0]);
    let dayTime = input[1];

    switch(dayTime) {

        case "Morning":
            if (degrease <= 18) {
                let outfit = "Sweatshirt"
                let shoes = "Sneakers"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`) }
            else if (degrease <= 24) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`)
            }
            else if (degrease >= 25) {
                let outfit = "T-Shirt"
                let shoes = "Sandals"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`)
            }   
        break;

        case "Afternoon":
            if (degrease <= 18) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`) }
            else if (degrease <= 24) {
                let outfit = "T-Shirt"
                let shoes = "Sandals"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`)
            }
            else if (degrease >= 25) {
                let outfit = "Swim Suit"
                let shoes = "Barefoot"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`)
            }
        break;

        case "Evening":
            if (degrease <= 18) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`) }
            else if (degrease <= 24) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`)
            }
            else if (degrease >= 25) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrease} degrees, get your ${outfit} and ${shoes}.`)
            }
         break;
    }
}

summerOutfit(["9", "Morning"])