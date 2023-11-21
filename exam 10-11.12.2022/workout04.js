function workout(input) {

    let daysTrening = Number(input[0]);


    let index = 1;
        let saveKm = Number(input[index]);
        index++;

    let currentKm = 0;

    let sum = saveKm; // km za denq

    let allkm = 0;
    let saveedKm = 0;

    
    for (let i = 2; i <= daysTrening + 1; i++) {

        let percentKmNextDays = Number(input[i]);
        let inPercent = percentKmNextDays / 100;

        currentKm = (sum * inPercent);

        sum +=  currentKm

        allkm = sum

        saveKm += allkm // izminati km

        allkm = 0;

        currentKm = 0;

    }

    if (saveKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(saveKm - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - saveKm)} more kilometers`);
    }

}
workout(["4",
"100",
"30",
"50",
"60",
"80"])
