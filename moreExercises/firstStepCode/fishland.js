function fishLand(input) {

    let priceSkymriq = Number(input[0]);
    let priceCaca = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]) * 7.50;

    let pricePalmud = priceSkymriq * 1.6;
    let priceSafrid = priceCaca * 1.8;
    
    let sumAll = (kgPalamud * pricePalmud) + (kgSafrid * priceSafrid) + kgMidi;
    
    console.log((sumAll.toFixed(2)));

}

fishLand([6.90, 4.20, 1.5, 2.5, 1])
