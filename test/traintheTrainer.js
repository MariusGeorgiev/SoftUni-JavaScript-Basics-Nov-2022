function trainTheTrainers(input) {
    let index = 0;
    let dgudgesAmount = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;
 
    let currentTotalScore = 0;
    let averageScoreSum = 0;
    let presentationsAmount = 0;
    
    while (presentationName !== "Finish") {
        presentationsAmount++;
 
        for (let i = 1; i <= dgudgesAmount; i++) {
            let score = Number(input[index]);
            index++;
 
            currentTotalScore += score;
        }
 
        let currentAverageScore = currentTotalScore / dgudgesAmount;
        console.log(`${presentationName} - ${currentAverageScore.toFixed(2)}.`);
 
        averageScoreSum += currentAverageScore;
        currentTotalScore = 0;
 
        presentationName = input[index];
        index++;
    }
 
    let totalAverageScore = averageScoreSum / presentationsAmount;
    console.log(`Student's final assessment is ${totalAverageScore.toFixed(2)}.`);    
}
 
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
