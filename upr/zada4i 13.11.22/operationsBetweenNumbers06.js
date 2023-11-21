function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operatorMath = input[2];

    let result = 0
    let evenOrOdd = ""

    switch(operatorMath) {

        case "+":
        result = n1 + n2
        break;

        case "-":
        result = n1 - n2
        break;

        case "*":
        result = n1 * n2
        break;

        case "/":
        result = (n1 / n2).toFixed(2)
        break;

        case "%":
        result = n1 % n2
        break;
    }
    
    if (result % 2 === 0) {
        evenOrOdd = "even"
    } else {
         evenOrOdd = "odd"
        }

    if ((operatorMath === "%" || operatorMath === "/") && n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`)   
        }

    else if (operatorMath === "+" || operatorMath === "-" || operatorMath === "*") {
        console.log(`${n1} ${operatorMath} ${n2} = ${result} - ${evenOrOdd}`)
        }
    
    else if (operatorMath === "/") {
        console.log(`${n1} ${operatorMath} ${n2} = ${result}`)
        }
    
    else if (operatorMath === "%") {
        console.log(`${n1} ${operatorMath} ${n2} = ${result}`) 
        }  
}

operationsBetweenNumbers(["8", "3", "%"])