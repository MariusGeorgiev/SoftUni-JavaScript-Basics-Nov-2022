function logistics(input) {

    let numForTransport = Number(input[0]);

    let allTovari = 0;
    let sumAllPriceForTon = 0;

    let sumTonsMicrobus = 0;
    let sumTonsKamion = 0;
    let sumTonsTrain = 0;

    for (let i = 1; i <= numForTransport; i++) {

        let tonsForTransport = Number(input[i]);

        allTovari += tonsForTransport

        let priceForTon = 0;

        if (tonsForTransport <= 3) {
            priceForTon = 200
            sumTonsMicrobus += tonsForTransport
        } else if (tonsForTransport <= 11) {
            priceForTon = 175
            sumTonsKamion += tonsForTransport
        } else if (tonsForTransport > 11) {
            priceForTon = 120
            sumTonsTrain += tonsForTransport
        }

        sumAllPriceForTon += (tonsForTransport * priceForTon)

    }

    let avgPerTon =  sumAllPriceForTon / allTovari;
    let avgMicroBus = sumTonsMicrobus / allTovari * 100;
    let avgKamion = sumTonsKamion / allTovari * 100;
    let avgTrain = sumTonsTrain / allTovari * 100;


    console.log(avgPerTon.toFixed(2));
    console.log(`${avgMicroBus.toFixed(2)}%`);
    console.log(`${avgKamion.toFixed(2)}%`);
    console.log(`${avgTrain.toFixed(2)}%`);

}
logistics([5,
    2,
    10,
    20,
    1,
    7
    ])