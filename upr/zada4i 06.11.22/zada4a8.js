function lunchBreak(input) {
    let movieTitle = input[0];
    let epizodeDuration = Number(input[1]);
    let breakeDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakeDuration;
    let leisureTime = (1 / 4) * breakeDuration;

    let busyTime = lunchTime + leisureTime;
    let timeLeft = breakeDuration - busyTime;

    if (timeLeft >= epizodeDuration) {
        let timeAfterMovie = timeLeft - epizodeDuration;
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(timeAfterMovie)} minutes free time.`)
    } else {
        let timeNeeded = epizodeDuration - timeLeft
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}

lunchBreak(["Game of thrones", "60", "96"]);

