function isExcellent(input) {
    let grade = Number(input[0]);

// let isExcellent = grade >= 5.50

    if(grade >= 5.50) {  //(isExcellent)
        console.log("Excellent!");
    } else {
          console.log("Not excellent");
    }
}

isExcellent([5.50]);