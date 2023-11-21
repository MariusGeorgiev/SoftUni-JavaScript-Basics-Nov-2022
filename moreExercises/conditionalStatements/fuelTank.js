function fuelTank(input) {

    let gorivo = input[0]
    let litersLeft = Number(input[1])

    if (gorivo === "Diesel" && litersLeft >= 25) {

        console.log(`You have enough diesel.`)

    }

    else if (gorivo === "Diesel" && litersLeft < 25) {

    console.log(`Fill your tank with diesel!`) 
}

else if (gorivo === "Gasoline" && litersLeft >= 25) {

    console.log(`You have enough gasoline.`)

}

else if (gorivo === "Gasoline" && litersLeft < 25) {

console.log(`Fill your tank with gasoline!`) 
}

else if (gorivo === "Gas" && litersLeft >= 25) {

    console.log(`You have enough gas.`)

}

else if (gorivo === "Gas" && litersLeft < 25) {

console.log(`Fill your tank with gas!`) 

}

 else  {
     console.log("Invalid fuel!")
 }

}

fuelTank(["Gas", "1"])