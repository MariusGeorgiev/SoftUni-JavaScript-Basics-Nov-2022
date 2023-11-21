function sumOfNumbers(input) {
    let n = input[0];
    let sum = 0;
    let index = 1;

    while (sum < n) {
        let currentNumber = Number(input[index]);
        sum = sum + currentNumber;
        index++;
    }
    console.log(sum);

}

sumOfNumbers(["100", "10", "20", "30", "40"])