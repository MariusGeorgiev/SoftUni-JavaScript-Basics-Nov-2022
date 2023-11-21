function everest(input) {

let index = 0;
let atanasSleepOrNot = input[index];
index++;


let counterDays = 0;

let firstDay = 5364

let Buleva = false;

while (atanasSleepOrNot !== "END") {
    
    let metersElevate = input[index];
    index++;

      

    let currentMeters = Number(metersElevate);

    firstDay += currentMeters;
    counterDays++;


    metersElevate = input[index];
    index++

    if (firstDay >= 8848) {
        Buleva = true;
    }

    if (counterDays > 5 || metersElevate == "END") {
        console.log("Failed!");
      console.log(`${firstDay}`);
    break;
    } else if (firstDay >= 8848) {

        console.log(`Goal reached for ${counterDays} days!`);
        break;
    }

}

}
everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])






