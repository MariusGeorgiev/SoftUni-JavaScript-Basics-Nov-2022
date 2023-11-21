function toyShop(input) {
    let vacantioPrice = Number(input[0]);
    let puzeleCount = Number(input[1]);
    let doolCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let moneyEarned = puzeleCount * 2.60 + doolCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;
    let toysCount = puzeleCount + doolCount + bearCount + minionCount + truckCount
    
    if (toysCount >= 50)  {
      
        moneyEarned = moneyEarned * 0.75;
    }
    let moneyAfterRent = moneyEarned * 0.90;

    if (moneyAfterRent >= vacantioPrice) {
       let moneyLeft = moneyAfterRent - vacantioPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let insufficientMoney = vacantioPrice - moneyAfterRent;
        console.log(`Not enough money! ${insufficientMoney.toFixed(2)} lv needed.`)
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"])