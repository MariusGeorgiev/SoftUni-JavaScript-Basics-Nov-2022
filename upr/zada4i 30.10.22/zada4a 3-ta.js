function deposit(input) {
    let depositSum = Number(input[0]);
    let depositPeriodMonths = Number(input[1]);
    let oneYearPercent = Number(input[2]);
    let percent = oneYearPercent / 100;

    let accInterest = depositSum * percent;
    let oneMounthInterest = accInterest / 12;
    let total = depositSum + depositPeriodMonths * oneMounthInterest;

    console.log(total);
}  

deposit([200 , 3 , 5.7])