function vegetableMarket(input) {

    let zelen4yk = Number(input[0]);
    let plodove = Number(input[1]);
    let kgZelenchyk = Number(input[2]);
    let kgPlodove = Number(input[3]);

    let oneEuro = 1.94

    let priceZelenc4yk = zelen4yk * kgZelenchyk
    let pricePlodove = plodove * kgPlodove

    let sumAll = (priceZelenc4yk + pricePlodove) / oneEuro

    console.log(sumAll.toFixed(2))


}

vegetableMarket([0.194,19.4,10,10])