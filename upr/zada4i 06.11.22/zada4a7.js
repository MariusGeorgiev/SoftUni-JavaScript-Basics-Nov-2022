function shopping (input) {
    let budget = Number(input[0]);
    let numSvga = Number(input[1]);
    let numCpu = Number(input[2]);
    let numRam = Number(input[3]);

    let priceSvga = numSvga * 250;

    let priceCpu = priceSvga * 0.35;
    let priceCpuNum = priceCpu * numCpu;

    let priceRam = priceSvga * 0.10;
    let priceRamNum = priceRam * numRam;

    let sumAll = priceSvga + priceCpuNum + priceRamNum

    let discount = sumAll * 0.15;
    let afterDiscount = sumAll - discount

    if (budget >= sumAll && numSvga > numCpu) {

        let abc = budget - afterDiscount

        console.log(`You have ${((abc).toFixed(2))} leva left!`)

    } else if (budget >= sumAll) {

        console.log(`You have ${((budget - sumAll).toFixed(2))} leva left!`)

    } else if (sumAll > budget && numSvga > numCpu) {


    console.log(`Not enough money! You need ${((afterDiscount - budget).toFixed(2))} leva more!`)

    } else if (sumAll > budget) {

        console.log(`Not enough money! You need ${((sumAll - budget).toFixed(2))} leva more!`)
    }
}

shopping (["920.45","3","1","1"])