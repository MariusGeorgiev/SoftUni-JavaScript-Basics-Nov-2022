function footballLeague(input) {
    
    let capacityStadion = Number(input[0]);
    let numFens = Number(input[1]);

    let sectorSumA = 0;
    let sectorSumB = 0;
    let sectorSumV = 0;
    let sectorSumG = 0;


    for (let i = 2; i <= (numFens + 1); i++) {

        let sectors = input[i];

        switch (sectors) {

            case "A":
                sectorSumA++;
            break;
            case "B":
                sectorSumB++;
            break;
            case "V":
                sectorSumV++;
            break;
            case "G":
                sectorSumG++;
            break;
        }

    }

console.log(`${(sectorSumA / numFens * 100).toFixed(2)}%`);
console.log(`${(sectorSumB / numFens * 100).toFixed(2)}%`);
console.log(`${(sectorSumV / numFens * 100).toFixed(2)}%`);
console.log(`${(sectorSumG / numFens * 100).toFixed(2)}%`);
console.log(`${(100 / capacityStadion * numFens).toFixed(2)}%`);

}
footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B'])