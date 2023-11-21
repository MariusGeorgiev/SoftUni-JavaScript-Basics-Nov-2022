function sleepyTomCat(input) {

    let stopaninWorkDays = Number(input[0]);

    let stopaninWorkMin = 63
    let stopaninPi4ivkaMin = 127

    let daysYear = 365

    let normTom = 30000

    let dayAfterPo4ivka = daysYear - stopaninWorkDays

    let tomPlayWorkDays = dayAfterPo4ivka * stopaninWorkMin

    let tomPlayHolyDays = stopaninWorkDays * stopaninPi4ivkaMin

    let allPlayTime = tomPlayHolyDays + tomPlayWorkDays 

    let allSleepTime = normTom - allPlayTime

    let allSleepTime2 = allPlayTime - normTom

    let allPlayTimeMin = allSleepTime % 60

    let allPlayTimeHours = allSleepTime / 60

    let allPlayTimeMin2 = allSleepTime2 % 60

    let allPlayTimeHours2 = allSleepTime2 / 60




    if (normTom >= allPlayTime) {

        console.log("Tom sleeps well");

    console.log(`${Math.floor(allPlayTimeHours)} hours and ${allPlayTimeMin} minutes less for play`)


    } 

    else if (normTom < allPlayTime) {

        console.log("Tom will run away");

        console.log(`${Math.floor(allPlayTimeHours2)} hours and ${allPlayTimeMin2} minutes more for play`)
    }

   
}

sleepyTomCat([113])