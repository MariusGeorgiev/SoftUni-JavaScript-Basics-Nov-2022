function puppyCare(input) {
    
    let foodKg = Number(input[0]) * 1000;

    let index = 1;
    let footEating = input[index];
    index++;

    let sumFoodBeforeAdopted = 0

    while (footEating !== "Adopted") {

       let currentInputFood = Number(footEating);

        sumFoodBeforeAdopted += currentInputFood

        footEating = input[index];
        index++;

    }

    if (foodKg >= sumFoodBeforeAdopted) {
        let foodRemained = foodKg - sumFoodBeforeAdopted

        console.log(`Food is enough! Leftovers: ${foodRemained} grams.`);


    } else if (sumFoodBeforeAdopted > foodKg) {

        let foodNeeded = sumFoodBeforeAdopted - foodKg

        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
    }

}
puppyCare(["3",
"1000",
"1000",
"1000",
"Adopted"])

