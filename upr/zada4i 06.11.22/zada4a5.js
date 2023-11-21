function godzillaKong (input) {
    let filmBudget = Number(input[0]);
    let numStatist = Number(input[1]);
    let priceForCostum = Number(input[2]);
    let decorationforFilm = filmBudget * 0.10;

    let costumeSum = numStatist * priceForCostum;
    let allExpense = costumeSum + decorationforFilm;

    let budgetLeft = filmBudget - allExpense
    let costumSumDiscount = costumeSum * 0.10;
    let afterDiscount = allExpense - costumSumDiscount

    if  (numStatist >= 150 && afterDiscount > filmBudget) {
        let moreThen150 = afterDiscount - filmBudget
    
        console.log("Not enough money!")
        console.log(`Wingard needs ${(moreThen150.toFixed(2))} leva more.`)

    } else if (allExpense > filmBudget) {
        let lessThen150 = allExpense - filmBudget

        console.log("Not enough money!")
        console.log(`Wingard needs ${(lessThen150.toFixed(2))} leva more.`)

    } else if  (numStatist >= 150) {
        let leftBuget = filmBudget - afterDiscount
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(leftBuget.toFixed(2))} leva left.`)

    } else {
        console.log("Action!")
    console.log(`Wingard starts filming with ${(budgetLeft.toFixed(2))} leva left.`)
    }

}

godzillaKong(["9587","222","55.5"])