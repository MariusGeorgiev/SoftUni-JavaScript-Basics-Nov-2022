function trainTheTrainer(input) {

    let jury = Number(input[0]);

    let index = 1;
    let presentation = input[index];
    index++
    let sumGrades = 0;
    let counter = 0;
    let AllGrades = 0;

    while (presentation !== "Finish") {

        counter++;
        
        for(let gradeNum = 1; gradeNum <= jury; gradeNum++) {
            let grades = Number(input[index]);
            index++;
            sumGrades += grades; 
        } 
        console.log(`${presentation} - ${(sumGrades / jury).toFixed(2)}.`);

        AllGrades += sumGrades

        sumGrades = 0; 

        presentation = input[index];
        index++; 
    }
    console.log(`Student's final assessment is ${(AllGrades / counter / jury).toFixed(2)}.`);
}
trainTheTrainer(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])



