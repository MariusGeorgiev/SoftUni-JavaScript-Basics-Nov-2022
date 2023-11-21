function repainting(input) {

    let nylon = Number(input[0]) + 2
    let paint = Number(input[1]) 
    let paintThinner = Number(input[2]) * 5.00
    let hoursWork = Number(input[3])
    let bags = 0.40

    let nylonSqueresPrice = nylon * 1.50 
    let paintLiters = paint + (paint * 0.10)
    let paintPrice = paintLiters * 14.50
    
    let materialsPrice = nylonSqueresPrice + paintPrice + paintThinner + bags
    let workersPayments = materialsPrice * 0.30

    let sumAllRepainting = materialsPrice + (workersPayments * hoursWork)

    console.log(sumAllRepainting)

}

repainting([5,10,10,1])