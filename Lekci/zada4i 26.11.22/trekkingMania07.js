function trekkingMania(input) {

    let sum = 0;

    let musala = 0;
    let monblan = 0;
    let kilimdjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {

        let peopleInEveryGroup = Number(input[i]);
        sum += peopleInEveryGroup
        
        if (peopleInEveryGroup <= 5) {
            musala += peopleInEveryGroup
        } else if (peopleInEveryGroup <= 12) {
            monblan += peopleInEveryGroup
        } else if (peopleInEveryGroup <= 25) {
            kilimdjaro += peopleInEveryGroup
        } else if (peopleInEveryGroup <= 40) {
            k2 += peopleInEveryGroup 
        } else if (peopleInEveryGroup >= 41) {
            everest += peopleInEveryGroup
        }
    }
// console.log(sum);
console.log((musala / sum * 100).toFixed(2) + "%");
console.log((monblan / sum * 100).toFixed(2) + "%");
console.log((kilimdjaro / sum * 100).toFixed(2) + "%");
console.log((k2 / sum * 100).toFixed(2) + "%");
console.log((everest / sum * 100).toFixed(2) + "%");
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
