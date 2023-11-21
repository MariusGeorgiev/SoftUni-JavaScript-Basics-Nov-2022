function reportSystem(input) {

    let sumForCollect = Number(input[0])

    index = 1;
    let sumSales = input[index];
    index++;

    let transactionType = ""

    let allCollectedSumCard = 0;
    let allCollectedSumCash = 0;

    let counterCard = 0;
    let counterCash = 0;

    let soldNonSold = ""

    let allCollectedSum = 0;
    

    while (sumSales !== "End") {

        let salesItemPrice = Number(sumSales);

        if ((index -1) % 2 === 0) {
            transactionType = "card"
        } else {
            transactionType = "cash"
        }

        if (salesItemPrice < 10 && transactionType == "card") {
            soldNonSold  = "Error in transaction!"
        } else if (salesItemPrice > 100 && transactionType == "cash") {
            soldNonSold = "Error in transaction!"
        } else {
            soldNonSold = "Product sold!"
        }

        if (soldNonSold == "Product sold!" && transactionType == "card") {
            allCollectedSumCard += salesItemPrice
            allCollectedSum += salesItemPrice
            counterCard++;
        } else if (soldNonSold == "Product sold!" && transactionType == "cash") {
            allCollectedSumCash += salesItemPrice
            allCollectedSum += salesItemPrice
            counterCash++; 
        }

        console.log(soldNonSold);

        if (sumForCollect <= allCollectedSum) {
            console.log(`Average CS: ${(allCollectedSumCash / counterCash).toFixed(2)}`);
            console.log(`Average CC: ${(allCollectedSumCard / counterCard).toFixed(2)}`);
            return;
        }

        sumSales = input[index];
        index++;

    }

    console.log("Failed to collect required money for charity.");

}
reportSystem(["500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317"
    ])