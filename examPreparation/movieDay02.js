function movieDay(input) {

let timeForPicture = Number(input[0]);
let countScene = Number(input[1]);
let timePerScene = Number(input[2]);

let preparation = timeForPicture * 0.15;
let timeForTakingScene = countScene * timePerScene;

let allTime = preparation + timeForTakingScene;

if(allTime > timeForPicture) {
    let needMinutes = allTime - timeForPicture;
    console.log(`Time is up! To complete the movie you need ${Math.round(needMinutes)} minutes.`);
} else {
    let leftMinutes = timeForPicture - allTime
    console.log(`You managed to finish the movie on time! You have ${Math.round(leftMinutes)} minutes left!`);
}
}

movieDay(["120", "10", "11"])