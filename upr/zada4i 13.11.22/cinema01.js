function cinema(input) {

    let movie = input[0];
    let rows = Number(input[1]);
    let colum = Number(input[2]);

    let allPlaces = rows * colum

    switch(movie) {

        case "Premiere":
            console.log(`${(allPlaces * 12.00).toFixed(2)} leva`)
        break;

        case "Normal":
            console.log(`${(allPlaces * 7.50).toFixed(2)} leva`)
        break;

        case "Discount":
            console.log(`${(allPlaces * 5.00).toFixed(2)} leva`)
        break;
    }
}

cinema(["Premiere", "10", "12"])