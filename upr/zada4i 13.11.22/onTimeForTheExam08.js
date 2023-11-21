function onTimeForTheExam(input) {

    let timeHourExam = Number(input[0]);
    let timeMinExam = Number(input[1]);

    let hourOfArrival = Number(input[2]);
    let minOfArrival = Number(input[3]);

    let totalExamMins = (timeHourExam * 60) + timeMinExam;

    let totalArrivalMins = (hourOfArrival * 60) + minOfArrival;
    

    let totalMinsDiff = Math.abs(totalExamMins - totalArrivalMins);
    let hoursDiff = Math.floor(totalMinsDiff / 60);
    let minsDiff = totalMinsDiff % 60;

    let timeDiff = "";

    if (hoursDiff > 0) {

        if (minsDiff < 10) {
            timeDiff = `${hoursDiff}:0${minsDiff}`
        } else {
            timeDiff = `${hoursDiff}:${minsDiff}`
        }
    }
    else {
        timeDiff = minsDiff
    }

    if (totalArrivalMins < totalExamMins) {
        if (totalMinsDiff <= 30) {
            console.log("On time");
            console.log(`${timeDiff} minutes before the start`);
        }
        else {
            console.log("Early");
            if (totalMinsDiff < 60) {
                console.log(`${timeDiff} minutes before the start`)
            } 
            else { 
                console.log(`${timeDiff} hours before the start`);
            }
        }
    } 
    else if (totalArrivalMins > totalExamMins) {
        console.log("Late");

        if (totalMinsDiff < 60) {
            console.log(`${timeDiff} minutes after the start`);
        } 
        else {
            console.log(`${timeDiff} hours after the start`);
        }
    } 
    else {
        console.log("On Time");
    }
}

onTimeForTheExam(["9", "30", "9", "50"])