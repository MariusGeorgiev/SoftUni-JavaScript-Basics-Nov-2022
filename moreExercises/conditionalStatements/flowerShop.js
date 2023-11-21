function flowerShop(input) {
    
    let magnoli = Number(input[0]) * 3.25
    let zombyli = Number(input[1]) * 4
    let rose = Number(input[2]) * 3.50
    let kaktus = Number(input[3]) * 8
    let pricePresent = Number(input[4])

    let sumPe4alba = magnoli + zombyli + rose + kaktus
    let sledDanak = sumPe4alba * 0.05

    let afterDanak = sumPe4alba - sledDanak


    if (pricePresent <= afterDanak) {

        let left = afterDanak - pricePresent

        console.log(`She is left with ${Math.floor(left)} leva.`)

    }

    else if (pricePresent > afterDanak) {
        
        let zaem = pricePresent - afterDanak

        console.log(`She will have to borrow ${Math.ceil(zaem)} leva.`)
    }


}

flowerShop([2,3,5,1,50])