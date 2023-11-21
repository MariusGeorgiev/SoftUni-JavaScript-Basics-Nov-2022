function exam(input) {

    let grade = Number(input[0]);

    if (grade < 2) {
        console.log(`Drink`);
    } else if (grade < 5) {
        console.log(`Drink`);
    } else if (grade === 6.00) {
        console.log(`Double Drink`);
    }
}
exam([6])