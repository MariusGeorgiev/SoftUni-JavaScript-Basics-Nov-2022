function grades(input) {

    let numStudentsForExam = Number(input[0]);

    let avgGrades = 0;

    let numUnderThree = 0;
    let numUnderFour = 0;
    let numUnderFive = 0;
    let numMoreThenFive = 0;

    for(let i = 1; i <= numStudentsForExam; i++) {

        let grades = Number(input[i]);

        avgGrades += grades

        if (grades < 3) {
            numUnderThree++;
        } else if (grades < 4) {
            numUnderFour++;
        } else if (grades < 5) {
            numUnderFive++;
        } else if (grades >= 5) {
            numMoreThenFive++;
        }
    }

    console.log(`Top students: ${(numMoreThenFive / numStudentsForExam * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(numUnderFive / numStudentsForExam * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(numUnderFour / numStudentsForExam * 100).toFixed(2)}%`);
    console.log(`Fail: ${(numUnderThree / numStudentsForExam * 100).toFixed(2)}%`);
    console.log(`Average: ${(avgGrades / numStudentsForExam).toFixed(2)}`);
    
}
grades([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
    ])