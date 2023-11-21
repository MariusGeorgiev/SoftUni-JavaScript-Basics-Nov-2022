function housePainting(input) {

    let xViso4ina = Number(input[0]);
    let yDaljina = Number(input[1]);
    let hViso4inaTri4ast = Number(input[2]);

    let vrata = 1.2 * 2
    let prozorec = 1.5 * 1.5

    let strani4nisteni = xViso4ina * yDaljina * 2 - (prozorec * 2)
    let zadnaStena = xViso4ina * xViso4ina
    let prednaStena = zadnaStena - vrata

    let sumSteni = strani4nisteni + zadnaStena + prednaStena

    let pokrivPravoagalnici = xViso4ina * yDaljina * 2
    let dvaTriagalnika = xViso4ina * hViso4inaTri4ast / 2
    let sumTriagalnici = dvaTriagalnika * 2

    let sumPokrivKvadratyra = pokrivPravoagalnici + sumTriagalnici


    console.log(((sumSteni / 3.4).toFixed(2)))
    console.log(((sumPokrivKvadratyra / 4.3).toFixed(2)))
}

housePainting([6,10,5.2])