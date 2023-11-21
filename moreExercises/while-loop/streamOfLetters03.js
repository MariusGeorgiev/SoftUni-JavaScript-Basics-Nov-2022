function streamOfLetters(input) {

    let index = 0;
    let symbol = input[index]
    index++;

    while (symbol !== "End") {
        symbol = input[index]
        


        if (symbol !== "c" || symbol !== "o" || symbol !== "n") {

         console.log(symbol);
         
        }

        index++;
        

    }


}

streamOfLetters('H',
    'n',
    'e',
    'l',
    'l',
    'o',
    'o',
    'c',
    't',
    'c',
    'h',
    'o',
    'e',
    'r',
    'e',
    'n',
    'e',
    'End')