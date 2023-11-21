function trapeziod(input) {

    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let sideS = b1 + b2;
    let haigh = sideS * h / 2;

    console.log((haigh.toFixed(2)))

}

trapeziod([8,13,7])