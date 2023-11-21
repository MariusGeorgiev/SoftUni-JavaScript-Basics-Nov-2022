function areaOfFigures(input) {
    let figure = input[0];
    //let lengthSideA = Number(input[1]);
   // let lengthSideB = Number(input[2]);

    if (figure === "square") {
        let lengthSideA = Number(input[1]);

        console.log((lengthSideA * lengthSideA).toFixed(3));

    } else if (figure === "rectangle") {
        let lengthSideA = Number(input[1]);
        let lengthSideB = Number(input[2]);

        console.log((lengthSideA * lengthSideB).toFixed(3));

    } else if (figure === "circle") {
        let radius = Number(input[1]);

        console.log((Math.PI * Math.pow(radius, 2)).toFixed(3));

    } else if (figure === "triangle") {
        let lengthSideA = Number(input[1]);
        let lengthSideB = Number(input[2]);

        console.log((lengthSideA * lengthSideB / 2).toFixed(3));
    }

}

areaOfFigures(["triangle", 4.5, 20])