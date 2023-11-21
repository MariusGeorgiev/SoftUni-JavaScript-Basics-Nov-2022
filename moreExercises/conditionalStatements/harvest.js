function harvest(input) {

    let kvadrataLoze = Number(input[0]);
    let grozdeZaOneKvadrata = Number(input[1]);
    let nyjniLitriVino = Number(input[2]);
    let NumWorkers = Number(input[3]);

   let sumGrozde = kvadrataLoze * grozdeZaOneKvadrata;

   let zadelqme = (0.40 * sumGrozde) / 2.5;

   if (nyjniLitriVino <= zadelqme) {

    let ostatak1 = zadelqme - nyjniLitriVino

    let forPerson = ostatak1 / NumWorkers

    console.log(`Good harvest this year! Total wine: ${Math.ceil(zadelqme)} liters.`);
    console.log(`${Math.floor(ostatak1)} liters left -> ${Math.ceil(forPerson)} liters per person.`);
   }

   else if (zadelqme < nyjniLitriVino) {

   let trqbvaVino = nyjniLitriVino - zadelqme

   console.log(`It will be a tough winter! More ${Math.floor(trqbvaVino)} liters wine needed.`);
}


}

harvest([650,2,175,3])