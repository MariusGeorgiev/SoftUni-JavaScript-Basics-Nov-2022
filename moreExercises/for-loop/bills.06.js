function bills(input) {

    let allMounths = Number(input[0])

    let water = 20;
    let net = 15;
    let sumCez = 0;

    for (let i = 1; i <= allMounths; i++) {

        let currentTax = Number(input[i]);

        sumCez += currentTax

    }

    let othersTax = (sumCez + (water * allMounths) + (net * allMounths)) * 1.20

    let allTaxesAvgForMounth = (othersTax + sumCez + (net * allMounths) + (water * allMounths)) / allMounths

    console.log(`Electricity: ${sumCez.toFixed(2)} lv`);
    console.log(`Water: ${(water * allMounths).toFixed(2)} lv`);
    console.log(`Internet: ${(net * allMounths).toFixed(2)} lv`);
    console.log(`Other: ${othersTax.toFixed(2)} lv`);
    console.log(`Average: ${allTaxesAvgForMounth.toFixed(2)} lv`);

}
bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22'])