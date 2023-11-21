function dishwasher(input) {

    let bottlesOfDetergent = Number(input[0]);
    let mlDetergent = bottlesOfDetergent * 750

    let index = 1;
    let dishes = input[index]
    index++;

    let sumCounterDishes = 0; 
    let sumCounterPans = 0;  

    let allDishesDetergentUsed = 0; 

while (dishes !== "End") {

    let currentDishes = Number(dishes);

    if (mlDetergent < allDishesDetergentUsed) {

        let neededDetergent = allDishesDetergentUsed - mlDetergent

        console.log(`Not enough detergent, ${neededDetergent} ml. more necessary!`);
        return;
    }

    if ((index -1) % 3 === 0) {
        sumCounterPans += currentDishes
        allDishesDetergentUsed += currentDishes * 15

    } else {
        sumCounterDishes += currentDishes
        allDishesDetergentUsed += currentDishes * 5
    }

    dishes = input[index]
    index++;
}

console.log("Detergent was enough!");
console.log(`${sumCounterDishes} dishes and ${sumCounterPans} pots were washed.`);
console.log(`Leftover detergent ${mlDetergent - allDishesDetergentUsed} ml.`);

}

dishwasher(["1", "10", "15", "10", "12", "13", "30"])