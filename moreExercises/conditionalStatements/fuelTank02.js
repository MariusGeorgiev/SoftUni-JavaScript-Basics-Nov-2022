function fuelTank02(input) {

    let gorivo = input[0];
    let litersGorivo = Number(input[1]);
    let clubCard = input[2];

    let priceBenzin = 2.22
    let priceDiesel = 2.33 
    let priceGas = 0.93

    let priceBenzinCard = priceBenzin - 0.18
    let priceDieselCard = priceDiesel - 0.12
    let priceGasCard = priceGas - 0.08


    if (gorivo === "Gas" && litersGorivo >= 20 && litersGorivo <= 25 && clubCard === "Yes") {

        let priceSum = priceGasCard * litersGorivo
        let discound = priceSum * 0.08
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gas" && litersGorivo >= 20 && litersGorivo <= 25 && clubCard === "No") {
        let priceSum = priceGas * litersGorivo
        let discound = priceSum * 0.08
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gas" && litersGorivo > 25 && clubCard === "Yes") {
        let priceSum = priceGasCard * litersGorivo
        let discound = priceSum * 0.10
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gas" && litersGorivo > 25 && clubCard === "No") {
        let priceSum = priceGas * litersGorivo
        let discound = priceSum * 0.10
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gas" && litersGorivo < 20 && clubCard === "Yes") {
        let priceSum = priceGasCard * litersGorivo
        
        console.log(`${priceSum.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gas" && litersGorivo < 20 && clubCard === "No") {
        let priceSum = priceGas * litersGorivo
        
        console.log(`${priceSum.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gasoline" && litersGorivo >= 20 && litersGorivo <= 25 && clubCard === "Yes") {
        let priceSum = priceBenzinCard * litersGorivo
        let discound = priceSum * 0.08
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gasoline" && litersGorivo >= 20 && litersGorivo <= 25 && clubCard === "No") {
        let priceSum = priceBenzin * litersGorivo
        let discound = priceSum * 0.08
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gasoline" && litersGorivo > 25 && clubCard === "Yes") {

        let priceSum = priceBenzinCard * litersGorivo
        let discound = priceSum * 0.10
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gasoline" && litersGorivo > 25 && clubCard === "No") {
        let priceSum = priceBenzin * litersGorivo
        let discound = priceSum * 0.10
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gasoline" && litersGorivo < 20 && clubCard === "Yes") {
        let priceSum = priceGasCard * litersGorivo
        
        console.log(`${priceSum.toFixed(2)} lv.`)

    }

    else if (gorivo === "Gasoline" && litersGorivo < 20 && clubCard === "No") {
        let priceSum = priceGas * litersGorivo
        
        console.log(`${priceSum.toFixed(2)} lv.`)

    }

    else if (gorivo === "Diesel" && litersGorivo >= 20 && litersGorivo <= 25 && clubCard === "Yes") {

        let priceSum = priceDieselCard * litersGorivo
        let discound = priceSum * 0.08
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Diesel" && litersGorivo >= 20 && litersGorivo <= 25 && clubCard === "No") {

        let priceSum = priceDiesel * litersGorivo
        let discound = priceSum * 0.08
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Diesel" && litersGorivo > 25 && clubCard === "Yes") {
        let priceSum = priceDieselCard * litersGorivo
        let discound = priceSum * 0.10
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Diesel" && litersGorivo > 25 && clubCard === "No") {

        let priceSum = priceDiesel * litersGorivo
        let discound = priceSum * 0.10
        let afterDiscound = priceSum - discound

        console.log(`${afterDiscound.toFixed(2)} lv.`)

    }

    else if (gorivo === "Diesel" && litersGorivo < 20 && clubCard === "Yes") {
        let priceSum = priceDieselCard * litersGorivo
        
        console.log(`${priceSum.toFixed(2)} lv.`)

    }

    else if (gorivo === "Diesel" && litersGorivo < 20 && clubCard === "No") {
        let priceSum = priceDiesel * litersGorivo
        
        console.log(`${priceSum.toFixed(2)} lv.`)

    }


}

fuelTank02(["Diesel", "19", "No"])