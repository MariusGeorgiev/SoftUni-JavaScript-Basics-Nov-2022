function transportPrice(input) {

    let kmNum = Number(input[0]);
    let dayOrNight = input[1];

    let taxiDay = 0.79
    let taxiNight = 0.90

    let autobusDayNight = 0.09

    let TrainDayNight = 0.06

    if (kmNum < 20 && dayOrNight === "day") {

        let taxiTax = (taxiDay * kmNum.toFixed(2))

        console.log(((0.70 + taxiTax).toFixed(2)));
    }

    else if (kmNum < 20 && dayOrNight === "night") {

        let taxiTax2 = taxiNight * kmNum.toFixed(2)

        console.log(((0.70 + taxiTax2).toFixed(2)));
    }

    else if (kmNum >= 20 && kmNum < 100) {


        console.log(((autobusDayNight * kmNum).toFixed(2)));
    }

    else if (kmNum >= 100) {

        console.log(((TrainDayNight * kmNum).toFixed(2)))
    }

}

transportPrice(["180", "day"])