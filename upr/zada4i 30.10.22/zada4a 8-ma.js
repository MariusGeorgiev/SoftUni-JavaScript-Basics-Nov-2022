function basketballEquipment(input) {
    let yearTaxForBasket = Number(input[0]);

    let sneakers = yearTaxForBasket * 0.60;
    let basketballTeam = sneakers * 0.80;
    let basketBall = basketballTeam * 0.25;
    let basketAccessoaries = basketBall * 0.20;

    console.log(yearTaxForBasket + sneakers + basketballTeam + basketBall + basketAccessoaries);

}

basketballEquipment([365]);