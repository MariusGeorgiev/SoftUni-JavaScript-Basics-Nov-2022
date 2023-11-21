function programmingBook(input) {

    let priceOneStr = Number(input[0]);
    let priceCover = Number(input[1]);
    let percentDiscount = Number(input[2]) / 100;
    let sumForPaymentDesign = Number(input[3]);
    let percentFromAllSumTeam = Number(input[4]) / 100;

    let priceBook = (priceOneStr * 899) + (priceCover * 2);

    let discountBook = priceBook - (priceBook * percentDiscount);

    let sumDesignAndBook = discountBook + sumForPaymentDesign;

    let finalSum = sumDesignAndBook - (sumDesignAndBook * percentFromAllSumTeam)

    console.log(`Avtonom should pay ${finalSum.toFixed(2)} BGN.`);

}
programmingBook(['0.01', '1', '10', '20', '20'])