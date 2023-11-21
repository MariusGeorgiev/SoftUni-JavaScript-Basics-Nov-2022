function skyTrip(input) {

    let apsNight = Number(input[0]) - 1;
    let typeApartment = input[1];
    let posNeg = input[2];
    
    switch(typeApartment) {

        case "room for one person":
            price = 18
        break;

        case "apartment":
            price = 25
            if (apsNight < 10) {
                price *= 0.70
            }
            else if (apsNight >= 10 && apsNight <= 15) {
                price *= 0.65
            }
            else if (apsNight > 15) {
                price *= 0.50
            }
        break;

        case "president apartment":
            price = 35 
            if (apsNight < 10) {
                price *= 0.90
            }
            else if (apsNight >= 10 && apsNight <= 15) {
                price *= 0.85
            }
            else if (apsNight > 15) {
                price *= 0.80
            }
        break;
    }

    let sum = price * apsNight
    let positive = sum * 1.25
    let negative = sum * 0.90

if (posNeg === "positive") {

     console.log(positive.toFixed(2))
}
else if (posNeg === "negative") {

    console.log(negative.toFixed(2))
}
}

skyTrip(["14", "apartment", "positive"])