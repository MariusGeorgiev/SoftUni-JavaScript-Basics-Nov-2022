function numbersDivisibleByNine(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;

    for (let i = n; i <= m; i++) {

        if( i % 9 === 0) {
            sum = sum + i;
        }
    }
    console.log("The sum: "+sum);
    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleByNine(["100", "200"])