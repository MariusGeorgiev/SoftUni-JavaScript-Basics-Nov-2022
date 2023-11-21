function pets(input) {
    let days = Number(input[0]);
    let hranaKG = Number(input[1]);
    let hranaDayDog = Number(input[2]);
    let hranaDatCat = Number(input[3]);
    let hranaDayKystenyrkaGrams = Number(input[4]) / 1000;

    let ky4eQde = hranaDayDog * days
    let kotkaQde = hranaDatCat * days
    let kostenyrkaQde = hranaDayKystenyrkaGrams * days

    let allAnimalsQdat = ky4eQde + kotkaQde + kostenyrkaQde

    if (hranaKG >= allAnimalsQdat) {

        let ostatak = hranaKG - allAnimalsQdat

        console.log(`${Math.floor(ostatak)} kilos of food left.`)
    }

    else if (allAnimalsQdat > hranaKG) {

        let trqbvat = allAnimalsQdat - hranaKG

        console.log(`${Math.ceil(trqbvat)} more kilos of food are needed.`)
    }

}

pets([2,10,1,1,1200])