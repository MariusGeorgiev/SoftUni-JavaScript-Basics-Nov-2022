function traningLab(input) {

    let w = Number(input[0]);
    let h = Number(input[1]) - 1;

    let redAbyra = Math.floor(h / 0.70)

    let daljinaZaByra = Math.floor(w / 1.20)

    let AllMesta = redAbyra * daljinaZaByra

    let vrataKatedra = 1.20 * 0.70 * 3



    console.log(Math.floor(AllMesta - vrataKatedra))

}

traningLab([15,8.9])