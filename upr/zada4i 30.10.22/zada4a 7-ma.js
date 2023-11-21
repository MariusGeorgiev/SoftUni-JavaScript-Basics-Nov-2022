function foodDilevery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    let chickenMenuPrice = chickenMenus * 10.35;
    let fishMenuPrice = fishMenus * 12.40;
    let veganMenuPrice = veganMenus * 8.15;

    let sumMenus = chickenMenuPrice + fishMenuPrice + veganMenuPrice;

    let dessert = sumMenus * 0.20;

    let preFinalBill = sumMenus + dessert;

    let dilivery = 2.50;

    let finalBill = preFinalBill + dilivery;

    console.log(finalBill);



}

foodDilevery([9,2,6]);

