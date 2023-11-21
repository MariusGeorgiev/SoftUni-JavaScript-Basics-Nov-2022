function arrayPlayground(array) {
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.table(array); // za grafi4no izobrazqvane b tablica
}

arrayPlayground(["a", "b", "c"]);

function squareArea(input) {
    let a = Number(input[0]);
    let area = a + a;
    console.log(area);
}

squareArea(["4"]);