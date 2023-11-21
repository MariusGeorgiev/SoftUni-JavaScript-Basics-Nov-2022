function petshop(input) { 
    let dogFoodPrice = 2.5;
    let catFoodPrice = 4;
    let dogbr = Number(input[0]);
    let catbr = Number(input[1]);
    let dogSum = dogFoodPrice * dogbr;
    let catSum = catFoodPrice * catbr;
    let finalCatAndDogSum = (dogSum + catSum) + " lv.";
    console.log(finalCatAndDogSum);
}

petshop(["5", "4"])