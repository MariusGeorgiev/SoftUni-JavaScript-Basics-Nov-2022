function solve(input) {
let text = 'softUni';
let number = input[2];
//console.log(number);
console.log(text.length);
console.log(text[2]);

}
solve([12,12,23,45])
----------------------
function solve(input) {
    let text =  input[0]
    let textLength = text.length;
    for (let i = 0; i < textLength; i = i + 1){ 
        console.log(text[i]);
    } 
    

    }
    solve(["hello"])
-------------------------------
function solve(input) {
    let text =  input[0]
    for (let i = 0; i < text.length; i++){ 
        console.log(text.charAt(i));
    } 
    }
    solve(["hello"])
    -------------------------------
    /* zada4a 6-ta 
    ot lekciqta
    **/
    function solve(input) {
        let text =  input[0]
        let sum = 0
        for (let i = 0; i < text.length; i++){ 
            switch (text.charAt(i)) {
                case "a":
                    sum = sum +1;
                break;
                case "e":
                    sum = sum +2;
                break;
                case "i":
                    sum = sum +3;
                break;
                case "o":
                    sum = sum +4;
                break;
                case "u":
                    sum = sum +5;
                break;
            }    
        } 
        console.log(sum);
        }
        solve(["hello"])
---------------------------
/*
preobrashtane 4islo na string
zada4a 7-ma ot lekciqta
**/
function solve (input){
    let n = input[0];
    let numAsString = n + "";
    let sum = 0;
    for(let i=0; i <=numAsString.length; i++) {
        sum = sum + Number(numAsString[i])    
    }
    console.log(`The sum of the digits is:${sum}`);
}
solve([23456]);
------------------------------------
/*
zada4a 8-ma ot lekciqta
**/
function solve(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumbers = '';
    
    for (let i = n; i <=m; i++) {
        if(i % 9 === 0) {
            sum = sum + i;
            outputNumbers = outputNumbers + i + "\n"; /*
            na nov red vqsko 4islo
            **/
        }
    }
    console.log("the Sum: "+sum);
    console.log(outputNumbers);

}
solve (["100", "200"])
