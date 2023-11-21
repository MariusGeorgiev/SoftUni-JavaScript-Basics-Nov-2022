function number100To200(input) {
    num = Number(input[0]);

    if (num < 100) {
        console.log("Less than 100");
    } else if (num <=200 && num>=100) {
        console.log("Between 100 and 200");
    } else if (num >= 200) {
        console.log("Greater than 200");
    } 

}

number100To200([95])