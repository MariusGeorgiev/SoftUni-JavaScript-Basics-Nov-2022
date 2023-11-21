function giftsFromSanta(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let num = ""

    for (let i = m; i >= n; i--) {

        if (s % 2 === 0 && s % 3 === 0 && s === i) {
            break

        } else if (i % 2 === 0 && i % 3 === 0) {
            num += `${i} `  

        }
    }

    console.log(num);

}
giftsFromSanta([ '20', '1000', '36' ])