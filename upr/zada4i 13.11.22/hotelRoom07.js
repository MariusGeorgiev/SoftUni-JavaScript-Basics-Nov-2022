function hotelRoom(input) {

    let mounts = input[0];
    let numNights = Number(input[1]);

    switch (mounts) {

        case "May":
        case "October":
            studioPrice = 50
            apartPrice = 65
            if (numNights > 7 && numNights <= 14) {
            studioPrice *= 0.95 
            } 
            else if (numNights > 14) {
            studioPrice *= 0.70 
            apartPrice *= 0.90
            }
        break;

        case "June":
        case "September":
            studioPrice = 75.20
            apartPrice = 68.70
            if (numNights > 14) {
            studioPrice *= 0.80 
            apartPrice *= 0.90 }
        break;

        case "July":
        case "August":
            studioPrice = 76
            apartPrice = 77
            if (numNights > 14) {
            apartPrice *= 0.90 }
        break;     
    }
    let sumAps = apartPrice * numNights
    let sumStudio = studioPrice * numNights
    
    console.log(`Apartment: ${sumAps.toFixed(2)} lv.`)
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)
}
hotelRoom(["May", "15"])