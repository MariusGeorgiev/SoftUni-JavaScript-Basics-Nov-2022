function suppliesforSchool(input) {
    let numberOfPenPacks = Number(input[0]) * 5.80
    let numberOfMarkersPacks = Number(input[1]) * 7.20
    let litersOfDetergent = Number(input[2]) * 1.20
    let percentDiscount = Number(input[3]) / 100
    
    let sumSupplies = numberOfPenPacks + numberOfMarkersPacks + litersOfDetergent
    let applyDiscount = sumSupplies * percentDiscount
 

    console.log(sumSupplies - applyDiscount)

}

suppliesforSchool([4,2,5,13]);