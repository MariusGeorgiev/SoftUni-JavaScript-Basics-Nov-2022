// •	1 грам мазнини = 9 калории
// •	1 грам протеини = 4 калории
// •	1 грам въглехидрати = 4 калории


function catDiet(input) {

   let percentMaznini = Number(input[0]);
   let percentProtein = Number(input[1]);
   let percentVaglehidrati = Number(input[2]);
   let sumOfCalories = Number(input[3]);
   let percentWater = Number(input[4]);

   let mazniniSum = (sumOfCalories * percentMaznini / 100)  / 9
   let proteiniSum = (sumOfCalories * percentProtein / 100) / 4
   let vaglehidratiSum = (sumOfCalories * percentVaglehidrati / 100) / 4

   let sumTegloHrana = mazniniSum + proteiniSum + vaglehidratiSum

   let caloriesForOneGram = sumOfCalories / sumTegloHrana

   let caloriesLeftAfterWater = caloriesForOneGram * percentWater / 100

   let finalOutput = caloriesForOneGram - caloriesLeftAfterWater


   console.log(finalOutput.toFixed(4));

}

catDiet(["40",
"40",
"20",
"3000",
"40"])

