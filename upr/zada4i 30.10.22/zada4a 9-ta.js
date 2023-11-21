function fishTank(input) {
    let lenght = Number(input[0]) / 10;
    let width = Number(input[1]) / 10;
    let height = Number(input[2]) / 10;
    let Percent = Number(input[3]) / 100 ; 

    let squereTank = lenght * width * height;
    let sandPercentDell = squereTank * Percent;


    console.log(squereTank - sandPercentDell)

}

fishTank([85,75,47,17])