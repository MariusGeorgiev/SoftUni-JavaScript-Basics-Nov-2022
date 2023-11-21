function triangleArea(input) {

    let side = Number(input[0]);
    let hight = Number(input[1]);

    let sum = side * hight / 2;

    console.log(sum.toFixed(2))

}

triangleArea([20,30])