function greaterNumber(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let result = "Greater number: ";

    if(a > b){
        console.log(result + a);    
    } else {
        console.log(result + b);

    }
    //console.log(result)
}

greaterNumber();
